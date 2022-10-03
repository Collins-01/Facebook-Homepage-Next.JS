import type { GetServerSideProps, NextPage } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import Head from 'next/head'
import Header from '../components/Header'
import { getSession, useSession } from "next-auth/react"
import Login from './Login'
import { Session } from 'next-auth'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widget from '../components/Widgets'


const Home: NextPage = () => {
  const { data: session, status } = useSession();
    const loading: boolean = status === 'loading';
    const authenticated: boolean = status === 'authenticated';
    const unauthenticated: boolean = status === 'unauthenticated';
  // if(!session){
  //   return (
  //     <Login/>
  //   );
  // }
  return <Login/>
  // return (
  //   <div className='h-screen bg-gray-100 overflow-hidden'>
  //       <Head>
  //               <title>Facebook</title>
  //           </Head>
  //           <Header/>

  //           <main className='flex'>
  //               {/* Sidebar */}
  //               <SideBar/>
  //               <Feed/>
  //               <Widget/>
                
  //           </main>
  //   </div> 
  // )
}

export default Home;





export const getServerSideProps: GetServerSideProps<{
  session: Session | null
}> = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  }
}