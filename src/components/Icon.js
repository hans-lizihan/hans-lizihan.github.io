import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faFacebook, faLinkedin, faGithub, faGraduationCap)

export default ({ icon, ...rest }) => <FontAwesomeIcon icon={icon} {...rest} />
