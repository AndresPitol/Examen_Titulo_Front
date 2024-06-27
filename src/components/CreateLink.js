import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!
    $marca: String!
    $precio: String!
    $descripcion: String!
  ) {
    createLink(nombre: $nombre, marca: $marca, precio: $precio, descripcion: $descripcion) {
      id
      nombre
      marca
      precio
      descripcion
    }
  }
`;




const CreateLink = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: '',
    marca: '',
    precio: '',
    descripcion: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      nombre: formState.nombre,
      marca: formState.marca,
      precio: formState.precio,
      descripcion: formState.descripcion
    },
    onCompleted: () => navigate('/')
  });


  return (
    <div>
      <form
        onSubmit={(e) => {
          alert("enviando datos...");
          e.preventDefault();
          createLink();

        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre"
          />
          <input
            className="mb2"
            value={formState.marca}
            onChange={(e) =>
              setFormState({
                ...formState,
                marca: e.target.value
              })
            }
            type="text"
            placeholder="Marca"
          />
           <input
            className="mb2"
            value={formState.precio}
            onChange={(e) =>
              setFormState({
                ...formState,
                precio: e.target.value
              })
            }
            type="text"
            placeholder="precio"
          />
           <input
            className="mb2"
            value={formState.descripcion}
            onChange={(e) =>
              setFormState({
                ...formState,
                descripcion: e.target.value
              })
            }
            type="text"
            placeholder="descripcion"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;
