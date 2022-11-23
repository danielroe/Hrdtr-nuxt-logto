import type { LogtoConfig, Storage } from '@logto/client'
import BaseClient, { createRequester } from '@logto/client'
import { generateCodeChallenge, generateCodeVerifier, generateState } from './utils/generators'
export type { IdTokenClaims, LogtoErrorCode, LogtoConfig, LogtoClientErrorCode, UserInfoResponse } from '@logto/client'

export {
  LogtoError,
  OidcError,
  Prompt,
  LogtoRequestError,
  LogtoClientError,
  ReservedScope,
  UserScope
} from '@logto/client'

const navigate = (url: string) => {
  window.location.assign(url)
}

export default class LogtoClient extends BaseClient {
  constructor (config: LogtoConfig, storage: Storage) {
    const requester = createRequester(fetch)
    super(config, {
      requester,
      navigate,
      storage,
      generateCodeChallenge,
      generateCodeVerifier,
      generateState
    })
  }
}
