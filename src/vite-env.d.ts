/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAY_TARGET_LAT?: string
  readonly VITE_MAY_TARGET_LNG?: string
  readonly VITE_MAY_RADIUS_M?: string
  readonly VITE_MAY_IMAGE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
