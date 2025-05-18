import { useState } from 'react'

export default function useApi(apiFunc) {
  const request = async () => {
    await apiFunc()
  }
}
