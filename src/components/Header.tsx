import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';

function Header() {
  const {data: sessionData} = useSession();

  return (
    <div className="navbar bg-base-100 shadow-md sticky z-10">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">NoteTaker</a>
  </div>
  <div className="flex-none">
    {sessionData?.user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={sessionData?.user?.image ?? ""} alt={sessionData?.user?.name ?? ""} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li onClick={() => void signOut()}><a>Logout</a></li>
      </ul>
    </div>: (
             <button className="btn-primary rounded-btn btn" onClick={() => void signIn()}>
            Sign in 
            </button>
          )}
  </div>
</div>
  )
}

export default Header