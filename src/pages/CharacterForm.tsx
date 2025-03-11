import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterService } from '../services/character.services';
import toast from 'react-hot-toast';
import InputForm from '../components/InputForm';
import TextAreaInputForm from '../components/TextAreaInputForm';

interface PersonajeProps {
  id: number;
  name: string;
  subclass: string;
  level: number;
  image: string;
  description: string;
  idUserAuthor: number;
  }
export default function CharacterForm() {
    const [form, setForm] = useState<Partial<PersonajeProps>>({
        name: '',
        subclass: '',
        image: '',
        description: '',
        level: 1
      })
    
      const {id} = useParams()
      const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    
      const [loading, setLoading] = useState(false)
      const navigate = useNavigate()
    
      useEffect(()=>{
        if(id){
          
          setLoading(true)
          CharacterService.getById(Number(id))
          .then(data => setForm({
            ...data,
          }))
          .catch((error) => setErrors(error.message))
          .finally(()=>setLoading(false))
    
        }
      }, [id])
    
    
    
      const handleSubmit = async (e: FormEvent) => {
        try {
            setLoading(true);
            setErrors({});
            e.preventDefault();
    
            const formData = {
                ...form,
            };
    
            if (id) {
                await CharacterService.update(Number(id), formData);
            } else {
                await CharacterService.create(formData);
            }
    
            toast.success('Personaje guardado correctamente!');
            navigate('/character');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Error al guardar el personaje!');
            // ... (Manejo de errores existente)
        } finally {
            setLoading(false);
        }
    };
    
    
      const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const {value, name} = e.target
        //if(name==='idCategory') valueNew = Number(value) 
        setForm({ ...form, [name]:value,  }) 
      }
    
    
      if(loading) return <p>Loading...</p>
    
      return (
        <div className='text-white flex flex-col'>
          <h2 className="text-4xl font-extrabold dark:text-white">{id?'Edición de personaje':'Nuevo personaje'}</h2>
    
          <form className="max-w-sm mx-auto min-w-sm" onSubmit={handleSubmit}>
          
          <InputForm text="Nombre" name="name" value={form.name || ''} handleChange={handleChange} error={errors.nombre} /> 
          <InputForm text="URL de la imagen" name="image" value={form.image || ''} handleChange={handleChange} error={errors.imagen} /> 
          <TextAreaInputForm type="textarea" rows={6} text="Descripción" name="description" value={form.description || ''} handleChange={handleChange} error={errors.descripcion} /> 
          
          <InputForm text="Subclase" name="subclass" value={form.subclass || ''} handleChange={handleChange} error={errors.subclase} /> 
          <InputForm text="Nivel" name="level" value={String(form.level || 1)} handleChange={handleChange} error={errors.nivel} type="number" /> 
    
       
          {errors && errors.message && <p className="text-center mt-4 text-red-500">{errors.message}</p>}
    
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Guardar
          </button>
          </form>
        </div>
      )
}
