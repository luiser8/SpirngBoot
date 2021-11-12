import React, { Fragment, useState, useEffect, useContext } from 'react';
import { PencilIcon, TrashIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { get, post, put, del } from '../../helpers/Fetch';
import Insertar from './modals/Insertar';
import { Toast } from '../../helpers/Toast';
import { Context } from '../../context/Context';
import Eliminar from './modals/Eiminar';
import Modificar from './modals/Modificar';

const Home = () => {
  const { checkUser } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [openInsertar, setOpenInsertar] = useState(false);
  const [openEliminar, setOpenEliminar] = useState(false);
  const [openModificar, setOpenModificar] = useState(false);

  const activeInsertar = async (open) => {
    setOpenInsertar(open);
  }
  const okInsertar = async (value) => {
    if (value.rol !== '' && value.name !== '' && value.email !== '' && value.password !== '') {
      await postUsers(value);
      setOpenInsertar(false);
    }
  }

  const activeEliminar = async (...params) => {
    setOpenEliminar(params[0].open);
      if (params[0].userId !== '') {
        setUser({'id': params[0].userId, 'name': params[0].userName});
      }
  }
  const okEliminar = async (value) => {
    if (value) {
      await deleteUsers(user.id);
      setOpenEliminar(false);
    }
  }

  const activeModificar = async (...params) => {
    setOpenModificar(params[0].open);
      if (params[0].userId !== '') {
        setUser({'id': params[0].userId, 'name': params[0].userName, 'email': params[0].email, 'rol': params[0].rol});
      }
  }
  const okModificar = async (value) => {
    if (value) {
      await putUsers(value);
      setOpenModificar(false);
    }
  }

  const getUsers = async () => {
    await get('users/getUsers').then((items) => {
      items !== undefined ? setUsers(items) : setUsers([]);
    });
  }

  const postUsers = async (values) => {
    await post('users/create', values).then((items) => {
      items !== undefined ? Toast({ show: true, title: 'Información!', msj: 'Nuevo usuario ha sido creado.', color: 'green' }) : Toast({ show: false });
      getUsers();
      Toast({ show: false });
    });
  }

  const putUsers = async (values) => {
    await put(`users/put/${values.id}`, values).then((items) => {
      items !== undefined ? Toast({ show: true, title: 'Información!', msj: 'Usuario ha sido modificado.', color: 'green' }) : Toast({ show: false });
      getUsers();
      Toast({ show: false });
    });
  }

  const deleteUsers = async (id) => {
    await del(`users/delete/${id}`).then((items) => {
        items !== undefined ? setUsers(users.filter(item => item.id !== id)) : setUsers([]);
        items !== undefined ? Toast({ show: true, title: 'Advertencia!', msj: 'Usuario ha sido eliminado.', color: 'red' }) : Toast({ show: false });
        getUsers();
    });
    Toast({ show: false });
}

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      {openInsertar ? <Insertar openInsert={activeInsertar} confirm={okInsertar} /> : <></>}
      {openEliminar ? <Eliminar openEliminar={activeEliminar} user={user} confirm={okEliminar} /> : <></>}
      {openModificar ? <Modificar openModificar={activeModificar} user={user} confirm={okModificar} /> : <></>}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-end">
          <div className="hidden sm:block">
            <button
              type="button"
              title="Agregar"
              disabled={false}
              className={`inline-flex items-center px-2 py-2 border rounded-md shadow-sm text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              onClick={async () => activeInsertar(true)}
            >
              <PlusCircleIcon className={`mr-0 h-8 w-8 text-gray-500 cursor-pointer text-gray-100 cursor-no-drop`} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {(Object.keys(users).length !== 0) ?
            <Fragment>
              {Object.keys(users).map((key, user) => (
                <div className="p-4 lg:w-1/3" key={key}>
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">USER #{users[user].id}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{users[user].name}</h1>
                    <p className="leading-relaxed mb-3">{users[user].email}</p>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <div className="col-span-8">
                          <button
                            type="submit"
                            disabled={false}
                            className={`inline-flex items-center px-2 py-2 border rounded-md shadow-sm text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            onClick={() => activeModificar({'open': true, 'userId': users[user].id, 'userName': users[user].name, 'email': users[user].email, 'rol': users[user].rol})}
                          >
                            <PencilIcon className={`mr-0 h-8 w-8 text-gray-500 cursor-pointer text-gray-100 cursor-no-drop`} aria-hidden="true" />
                          </button>
                        </div>
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <div className="col-span-8">
                          <button
                            type="submit"
                            disabled={checkUser().userId !== users[user].id ? false : true}
                            className={`inline-flex items-center px-2 py-2 border rounded-md shadow-sm text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            onClick={() => activeEliminar({'open': true, 'userId': users[user].id, 'userName': users[user].name})}
                          >
                            <TrashIcon className={`mr-0 h-8 w-8 ${checkUser().userId === users[user].id ? 'text-gray-100 cursor-no-drop' : 'text-gray-500 cursor-pointer'}`} aria-hidden="true" />
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
            :
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="w-full mx-auto text-center">
                  <p className="leading-relaxed text-lg">No hay registros por algun problema de red.</p>
                </div>
              </div>
            </section>
          }
        </div>
      </div>
    </section>
  )
}

export default Home;