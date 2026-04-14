import { useCallback, useEffect, useRef, useState } from 'react'
import { haversineMeters } from '@/lib/geo'
import peopleImage from '@/assets/people.jpg'

const TAP_TO_UNLOCK = 10
const TAP_WINDOW_MS = 5000

const DEFAULT_RADIUS_M = 125
const GEO_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 15_000,
  maximumAge: 60_000,
}

type GeoStatus =
  | 'idle'
  | 'pending'
  | 'in_range'
  | 'out_of_range'
  | 'denied'
  | 'unavailable'
  | 'no_target'

type UnlockReason = 'none' | 'location' | 'tap'

let mayGeolocationStarted = false

function readTarget(): {
  hasTarget: boolean
  lat: number
  lng: number
  radiusM: number
} {
  const lat = Number.parseFloat(import.meta.env.VITE_MAY_TARGET_LAT ?? '')
  const lng = Number.parseFloat(import.meta.env.VITE_MAY_TARGET_LNG ?? '')
  const hasTarget = Number.isFinite(lat) && Number.isFinite(lng)
  const fromEnv = Number.parseFloat(import.meta.env.VITE_MAY_RADIUS_M ?? '')
  const radiusM =
    Number.isFinite(fromEnv) && fromEnv > 0 ? fromEnv : DEFAULT_RADIUS_M
  return { hasTarget, lat, lng, radiusM }
}

const May = () => {
  const { hasTarget, lat: targetLat, lng: targetLng, radiusM } = readTarget()
  const heroSrc =
    import.meta.env.VITE_MAY_IMAGE_URL?.trim() || '/may-hero.svg'

  const [unlocked, setUnlocked] = useState(false)
  const [unlockReason, setUnlockReason] = useState<UnlockReason>('none')
  const [geoStatus, setGeoStatus] = useState<GeoStatus>(
    hasTarget ? 'idle' : 'no_target',
  )

  const unlockedRef = useRef(false)
  const tapTimesRef = useRef<number[]>([])

  useEffect(() => {
    unlockedRef.current = unlocked
  }, [unlocked])

  useEffect(() => {
    if (!hasTarget) {
      setGeoStatus('no_target')
      return
    }
    if (mayGeolocationStarted) return
    if (!('geolocation' in navigator)) {
      setGeoStatus('unavailable')
      return
    }
    mayGeolocationStarted = true
    setGeoStatus('pending')

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const d = haversineMeters(
          { lat: pos.coords.latitude, lng: pos.coords.longitude },
          { lat: targetLat, lng: targetLng },
        )
        if (d <= radiusM) {
          setUnlocked(true)
          setUnlockReason('location')
          setGeoStatus('in_range')
        } else {
          setGeoStatus('out_of_range')
        }
      },
      () => {
        setGeoStatus('denied')
      },
      GEO_OPTIONS,
    )
  }, [hasTarget, targetLat, targetLng, radiusM])

  const handleImageClick = useCallback(() => {
    if (unlockedRef.current) return
    const now = Date.now()
    const windowStart = now - TAP_WINDOW_MS
    const next = tapTimesRef.current.filter((t) => t > windowStart)
    next.push(now)
    tapTimesRef.current = next
    if (next.length >= TAP_TO_UNLOCK) {
      setUnlockReason('tap')
      setUnlocked(true)
    }
  }, [])

  return (
    <div className="md:px-30 flex flex-col gap-8 px-10 pb-16 pt-8 sm:px-20 lg:px-40 xl:px-72">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <button
          type="button"
          onClick={handleImageClick}
          className="group relative overflow-hidden rounded-xl ring-2 ring-eucalyptus-600/40 transition ring-offset-2 ring-offset-mountain-mist-950 focus:outline-none focus-visible:ring-eucalyptus-400"
          aria-label="Photo clue — tap repeatedly if you already know the surprise"
        >
          <img
            src={heroSrc}
            alt=""
            className="max-h-[min(70vh,520px)] w-full object-cover"
            draggable={false}
          />
        </button>

        <div className="space-y-3 font-mono text-chatelle-100">
          <p className="text-lg font-light leading-relaxed">
          <span className="text-eucalyptus-400">🎉 🎉</span> Happy birthday! <span className="text-eucalyptus-400">🎉 🎉</span>
          </p>
          <p className="text-lg font-light leading-relaxed">
            When you're ready, head to the Whangie and more shall be revealed... 
          </p>
          {import.meta.env.DEV ? (
            <p className="text-sm text-chatelle-200/90">
              Configure{' '}
              <code className="text-eucalyptus-400">VITE_MAY_TARGET_LAT</code>,{' '}
              <code className="text-eucalyptus-400">VITE_MAY_TARGET_LNG</code>,{' '}
              <code className="text-eucalyptus-400">VITE_MAY_RADIUS_M</code>,{' '}
              <code className="text-eucalyptus-400">VITE_MAY_IMAGE_URL</code> in{' '}
              <code className="text-eucalyptus-400">.env</code>. Default image:{' '}
              <code className="text-eucalyptus-400">/may-hero.svg</code>.
            </p>
          ) : null}
        </div>
      </div>

      <section
        className="mx-auto w-full max-w-xl rounded-xl border border-eucalyptus-800/50 bg-mountain-mist-900/40 px-6 py-8 transition-opacity duration-500"
        aria-hidden={!unlocked}
        style={{
          opacity: unlocked ? 1 : 0,
          pointerEvents: unlocked ? undefined : 'none',
          visibility: unlocked ? 'visible' : 'hidden',
        }}
      >
        <h2 className="mb-3 font-mono text-2xl font-semibold text-eucalyptus-400">
          It's weightier than Mount Tai but Lord knows you hold up half the muhfuccin sky
        </h2>
        <img src={ peopleImage } alt="Weightier than Mount Tai" className="w-full h-auto rounded-xl" />
        <p className="font-mono text-chatelle-100 leading-relaxed">
          SIKE! i took that and recycled it from last time but it's worth saying again!
        </p>
        <p className="font-mono text-xs text-chatelle-50 leading-relaxed">a large language model imposes itself at the winking bunghole of this world historical conjuncture</p>
        {import.meta.env.DEV && unlocked && unlockReason !== 'none' ? (
          <p className="mt-4 font-mono text-xs text-mountain-mist-400">
            Dev: unlocked via {unlockReason}
          </p>
        ) : null}
      </section>

      {import.meta.env.DEV && geoStatus !== 'idle' && geoStatus !== 'pending' ? (
        <p className="mx-auto max-w-xl text-center font-mono text-xs text-mountain-mist-500">
          Geo: {geoStatus}
        </p>
      ) : null}
    </div>
  )
}

export default May
