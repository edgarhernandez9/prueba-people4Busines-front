import { RegisterForm } from '../../components'

export const EntryForm = () => {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>Registrar nuevo blog</h1>
            <RegisterForm />
        </div>
    )
}
