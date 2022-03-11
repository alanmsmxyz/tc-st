import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  const pageTransitionVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        variants={pageTransitionVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
