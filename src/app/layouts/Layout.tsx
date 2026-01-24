import { Header } from "@/widgets/Header/ui/Header"
import styles from './Layout.module.css'
import { Outlet } from "react-router-dom"




function Layout() {
  
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
