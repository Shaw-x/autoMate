import {  ProChat } from '@ant-design/pro-chat';
import {useChat} from '@renderer/hooks/route';
import { useTheme } from 'antd-style';
import "./chat-page.scss"
import Code from './Code';
export const Chat = () => {
  const theme = useTheme();
  // const run = async ()=>{
  //   const response = await useChat([{ role: 'user', content: '你好' }])
  //   return response
  // }
  // run()
  return (
    <div className='chat-page'>
    <div style={{ background: theme.colorBgLayout }} className='chat'>
    <ProChat
        helloMessage={
            <div className='text-black'>你好，我叫智子，你的智能Agent助手，有什么要求可以随时吩咐！</div>
        }
        request={async (messages) => {
            console.log('messages', JSON.stringify(messages))
            const response = await useChat(JSON.stringify(messages))
            // 使用 Message 作为参数发送请求
            return response// 支持流式和非流式
    }}
  />
  </div>
  <div className='code'>
    <Code />
  </div>
  </div>
  )
}