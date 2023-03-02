import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png';
import './header.css';
import { Link } from 'react-router-dom';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img src={user.avatarUrl ? user.avatarUrl : avatar} alt="Foto avatar" />
      </div>

      <Link>
        <FiHome color="#FFF" size={24} />
        Chamados
      </Link>

      <Link>
        <FiUser color="#FFF" size={24} />
        Clientes
      </Link>

      <Link>
        <FiSettings color="#FFF" size={24} />
        Chamados
      </Link>
    </div>
  );
}
