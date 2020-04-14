import styled from 'styled-components'

export const FeedPage = styled.div`
  font-family: 'Roboto';
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
`
export const Sidebar = styled.div`
  width: 250px;
  height: 290px;
  border-radius: 10px;
  background: #fff;
`
export const FeedHistory = styled.div`
  width: 530px;
  height: 92vh;
  border-radius: 10px;
  background: #fff;
  margin-left: 26px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`
