import { useEffect } from 'react'
import { GiGardeningShears } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdArticle, MdLogout } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button'
import ButtonTheme from '../../Components/ButtonTheme'
import LogoDark from '../../Images/logo-dark.png'
import Logo from '../../Images/logo.png'
import { useStoreActions, useStoreState } from '../../State/hook'
import GetTheme from '../../Utils/GetTheme'
import LogoutRequest from '../../Utils/LogoutRequest'

type Props = {
  base: 'top' | 'bottom'
}

const AdminNavbar = (props: Props) => {
  const theme = useStoreState(state => state.theme.value)
  const themeToggle = useStoreActions((actions) => actions.themeToggle)
  useEffect(() => {
    (async () => {
      const theme = await GetTheme()
      themeToggle({value: theme})
    })()
  }, [])
  if (props.base === 'top') {
    return (
      <nav className='sticky top-0 bg-white dark:bg-dark shadow-[0_4px_12px_0px_rgba(0,0,0,0.3)]'>
        <NavLink to={'/admin'}>
          <img src={theme === 'light' ? Logo : LogoDark} alt="Alam Rohman Garden" className='max-h-14' />
        </NavLink>
      </nav>
    )
  } else {
    return (
      <nav className='sticky bottom-0 h-14 bg-white dark:bg-dark md:hidden flex gap-3 justify-center items-center shadow-[0_-4px_12px_0px_rgba(0,0,0,0.3)]'>
        <NavLink to={'/admin/services'}>
          <GiGardeningShears size={48} />
        </NavLink>
        <NavLink to={'/admin/articles'}>
          <MdArticle size={48} />
        </NavLink>
        <NavLink to={'/admin/about'}>
          <ImProfile size={48} />
        </NavLink>
        <Button className='px-0 py-0' onClick={async () => LogoutRequest()}>
          <MdLogout size={48} />
        </Button>
        <ButtonTheme />
      </nav>
    )
  }
}

export default AdminNavbar