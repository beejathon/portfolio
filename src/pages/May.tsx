import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { haversineMeters } from '@/lib/geo'
import peopleImage from '@/assets/people.jpg'
import bloomImage from '@/assets/bloom.png'

const MAY_SPOT_A = {
  lat: 56.078,
  lng: -4.363,
  radiusM: 150,
}

const MAY_SPOT_B = {
  lat: 55.8642,
  lng: -4.2518,
  radiusM: 150,
}

const whangieImage =
  'https://i0.wp.com/www.glasgowwithkids.co.uk/wp-content/uploads/2025/02/the-whangie-rock-formation-scaled.jpg?ssl=1'

const TAP_TO_UNLOCK_A = 10
const TAP_TO_UNLOCK_B = 10
const TAP_WINDOW_MS = 5000

const GEO_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 15_000,
  maximumAge: 60_000,
}

type StageReason = 'none' | 'location' | 'tap'

type GeoStatus =
  | 'idle'
  | 'pending'
  | 'fix'
  | 'denied'
  | 'unavailable'

let mayGeolocationStarted = false

function hiddenSectionStyle(visible: boolean): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? undefined : 'none',
    visibility: visible ? 'visible' : 'hidden',
  }
}

const May = () => {
  const [revealA, setRevealA] = useState(false)
  const [revealB, setRevealB] = useState(false)
  const [reasonA, setReasonA] = useState<StageReason>('none')
  const [reasonB, setReasonB] = useState<StageReason>('none')
  const [geoStatus, setGeoStatus] = useState<GeoStatus>('idle')
  const [geoDebug, setGeoDebug] = useState<{
    dA: number
    dB: number
    inA: boolean
    inB: boolean
  } | null>(null)

  const revealARef = useRef(false)
  const revealBRef = useRef(false)
  const tapTimesARef = useRef<number[]>([])
  const tapTimesBRef = useRef<number[]>([])

  useEffect(() => {
    revealARef.current = revealA
  }, [revealA])

  useEffect(() => {
    revealBRef.current = revealB
  }, [revealB])

  useEffect(() => {
    if (mayGeolocationStarted) return
    if (!('geolocation' in navigator)) {
      setGeoStatus('unavailable')
      return
    }
    mayGeolocationStarted = true
    setGeoStatus('pending')

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const user = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }
        const dA = haversineMeters(user, {
          lat: MAY_SPOT_A.lat,
          lng: MAY_SPOT_A.lng,
        })
        const dB = haversineMeters(user, {
          lat: MAY_SPOT_B.lat,
          lng: MAY_SPOT_B.lng,
        })
        const inA = dA <= MAY_SPOT_A.radiusM
        const inB = dB <= MAY_SPOT_B.radiusM

        setGeoDebug({ dA, dB, inA, inB })
        setGeoStatus('fix')

        if (inA) {
          setRevealA(true)
          setReasonA((r) => (r === 'none' ? 'location' : r))
        }
        if (inB) {
          setRevealB(true)
          setReasonB((r) => (r === 'none' ? 'location' : r))
        }
      },
      () => {
        setGeoStatus('denied')
      },
      GEO_OPTIONS,
    )
  }, [])

  const handleImageClick = useCallback(() => {
    const now = Date.now()
    const windowStart = now - TAP_WINDOW_MS

    if (!revealARef.current) {
      const next = tapTimesARef.current.filter((t) => t > windowStart)
      next.push(now)
      tapTimesARef.current = next
      if (next.length >= TAP_TO_UNLOCK_A) {
        setRevealA(true)
        setReasonA((r) => (r === 'none' ? 'tap' : r))
      }
      return
    }

    if (!revealBRef.current) {
      const next = tapTimesBRef.current.filter((t) => t > windowStart)
      next.push(now)
      tapTimesBRef.current = next
      if (next.length >= TAP_TO_UNLOCK_B) {
        setRevealB(true)
        setReasonB((r) => (r === 'none' ? 'tap' : r))
      }
    }
  }, [])

  return (
    <div className="md:px-30 flex flex-col gap-8 px-10 pb-16 pt-8 sm:px-20 lg:px-40 xl:px-72">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <button
          type="button"
          onClick={handleImageClick}
          className="group relative overflow-hidden rounded-xl ring-2 ring-eucalyptus-600/40 transition ring-offset-2 ring-offset-mountain-mist-950 focus:outline-none focus-visible:ring-eucalyptus-400"
          aria-label="Photo clue — tap repeatedly to reveal the next stage if you are not using location"
        >
          <img
            src={peopleImage}
            alt="Serve the people"
            className="max-h-[min(70vh,520px)] w-full object-cover"
            draggable={false}
          />
        </button>

        <div className="space-y-3 font-mono text-chatelle-100">
          <p className="text-lg font-light leading-relaxed">
            <span className="text-eucalyptus-400">🎉 🎉</span>{' '}
            Happy birthday!{' '}
            <span className="text-eucalyptus-400">🎉 🎉</span>
          </p>
          <p className="text-lg font-light leading-relaxed">
            And what is to be done? Lord knows it's weightier than Mount Tai. Let Mary Barbour point you in the right direction...
          </p>
          {import.meta.env.DEV ? (
            <p className="text-sm text-chatelle-200/90">
              Geofence targets are hardcoded at the top of{' '}
              <code className="text-eucalyptus-400">May.tsx</code>.
            </p>
          ) : null}
        </div>
      </div>

      <section
        className="mx-auto w-full max-w-xl rounded-xl border border-eucalyptus-800/50 bg-mountain-mist-900/40 px-6 py-8 transition-opacity duration-500"
        aria-hidden={!revealA}
        style={hiddenSectionStyle(revealA)}
      >
        <h2 className="mb-3 font-mono text-2xl font-semibold text-eucalyptus-400">
          You made it! Now let's go to where we can see the half of that one thing...
        </h2>
        <p className="font-mono leading-relaxed text-chatelle-100">
          That you stay holding up, no maybes no buts. <br />
          Plus the other half, you know, the half nots? <br />
          <a
            href="https://genius.com/3000687/Kool-ad-open-letter/And-if-not-just-look-and-see-what-you-saw-and-with-that-saw-cut-yourself-in-half-and-two-halves-make-a-whole-so-climb-through-that"
            target="_blank"
            rel="noreferrer"
            className="text-eucalyptus-400 underline"
            >
            And if not, just look and see what you saw. <br />
            And with that saw cut yourself in half. <br />
            And two halves make a whole so climb through that <br />
          </a>.
          <img
            src={whangieImage}
            alt="Whangie"
            className="h-auto w-full rounded-xl"
          />
        </p>
        {import.meta.env.DEV && revealA && reasonA !== 'none' ? (
          <p className="mt-4 font-mono text-xs text-mountain-mist-400">
            Dev: stage A via {reasonA}
          </p>
        ) : null}
      </section>

      <section
        className="mx-auto w-full max-w-xl rounded-xl border border-eucalyptus-800/50 bg-mountain-mist-900/40 px-6 py-8 transition-opacity duration-500"
        aria-hidden={!revealB}
        style={hiddenSectionStyle(revealB)}
      >
        <h2 className="mb-3 font-mono text-2xl font-semibold text-eucalyptus-400">
          Let a hundred flowers blossom and cover the sky
        </h2>
        <img
          src={bloomImage}
          alt="Let a hundred flowers blossom and cover the sky"
          className="h-auto w-full rounded-xl"
        />
        <p className="font-mono leading-relaxed text-chatelle-100">
          I can't write poetry anymore so all I have are these regular shmegular words for you. 
          
          I love you. I love you. I love you and also I love you.
          
          Thank you for being my best friend.
          Thank you for being a comrade.
          Thank you for showing our son how to climb trees,
          how to walk without socks and shoes,
          how to get down and dirty in the mud,
          how to dance without irony,
          how to listen to his emotions,
          and all the endless other things I always forget to do.

          You're so cool. You're so cool!

          Plus you're the love of my life. You brought me back from the dead.

          How do you keep doing it?
        </p>
        {import.meta.env.DEV && revealB && reasonB !== 'none' ? (
          <p className="mt-4 font-mono text-xs text-mountain-mist-400">
            Dev: stage B via {reasonB}
          </p>
        ) : null}
      </section>

      {import.meta.env.DEV &&
      geoStatus !== 'idle' &&
      geoStatus !== 'pending' &&
      geoDebug ? (
        <p className="mx-auto max-w-xl text-center font-mono text-xs text-mountain-mist-500">
          Geo: {geoStatus} — A: {Math.round(geoDebug.dA)}m (
          {geoDebug.inA ? 'in' : 'out'}), B: {Math.round(geoDebug.dB)}m (
          {geoDebug.inB ? 'in' : 'out'})
        </p>
      ) : null}
      {import.meta.env.DEV && geoStatus === 'denied' ? (
        <p className="mx-auto max-w-xl text-center font-mono text-xs text-mountain-mist-500">
          Geo: denied
        </p>
      ) : null}
      {import.meta.env.DEV && geoStatus === 'unavailable' ? (
        <p className="mx-auto max-w-xl text-center font-mono text-xs text-mountain-mist-500">
          Geo: unavailable
        </p>
      ) : null}
    </div>
  )
}

export default May
