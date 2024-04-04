import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4 p-6">
      <div className='flex flex-col gap-2'>
        <label htmlFor="username" className='text-base font-normal'>Usuário</label>
        <div className='flex items-center border rounded-lg h-12 p-4' style={{ borderColor: '#6A6A6A' }}>
          <span className='mr-2'>
            <FontAwesomeIcon icon={faUser} className='w-5 h-5' />
          </span>
          <input
            type="text"
            id="username"
            className='flex-grow focus:outline-none' // Adicionei a classe focus:outline-none aqui
            placeholder="aluno12342"
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="password" className='text-base font-normal'>Senha</label>
        <div className='flex items-center border rounded-lg h-12 p-4' style={{ borderColor: '#6A6A6A' }}>
          <span className='mr-2'>
            <FontAwesomeIcon icon={faLock} className='w-5 h-5' />
          </span>
          <input
            type="password"
            id="password"
            className='flex-grow focus:outline-none' // Adicionei a classe focus:outline-none aqui
            placeholder="************"
          />
        </div>
      </div>
      
      <button type="submit" className="bg-[#0761E2] text-white w-auto h-12 py-2 px-4 rounded-lg">
        <p className='font-medium text-lg'>Entrar</p>
      </button>

      <div className='flex items-center w-auto h-12 gap-4'>
        <input
          type="checkbox"
          id="keepLoggedIn"
        />
        <label htmlFor="keepLoggedIn" className='text-base font-normal'>Manter conectado</label>
      </div>
      <div className='flex w-full h-20 gap-4 justify-center'>
        <div className='flex gap-1'>
          <p>Esqueceu a senha?</p>
          <a href="/forgot-password" className='font-bold'>Recuperar Senha</a>
        </div>
      </div>
    </form>
  );
}







