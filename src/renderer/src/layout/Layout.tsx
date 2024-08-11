import SiderBar from './SiderBar'
import Nav from './Nav'
import Content from './Content'
function Layout(): JSX.Element {
  return (
    <div className="grid grid-cols-[200px_1fr] grid-rows-[48px_1fr] w-full h-screen">
      <SiderBar className={'row-span-full bg-green-600'}></SiderBar>
      <Nav className={'col-start-2 row-span-1 col-span-full bg-blue-900'}></Nav>
      <Content className={'col-start-2 row-span-1 col-span-full bg-red-500'}></Content>
    </div>
  )
}

export default Layout
