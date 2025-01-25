export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skUHDl6capUtrYbcMLvp7isZQUSaCbe2LJ1n5kbknYDju3uewJV2MqipX1rmlNr54dJgr1rJwRoApP8NcrN4SMd3qai0K7cZRcn1haOrS9hLd9Pcl9jJeO5oNHxjUF63AKhP4St5mBbhsXWGE2sBlCYXsOL7hXJZ0EZI0FYw9F1KtnKGhmXA",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
