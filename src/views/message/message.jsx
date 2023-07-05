import  { memo } from 'react'

const Message = memo(() => {
  return (
    <div>Message</div>
  )
})

Message.displayName = 'Message'
export default Message