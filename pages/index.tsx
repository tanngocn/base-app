
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/common/layout';

import { setToken } from './redux/auth/slice';

function Home() {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(setToken('hello this first test persist'))
  }
  return (
    <div>
      <button onClick={handleCLick}>increment</button>
    </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
