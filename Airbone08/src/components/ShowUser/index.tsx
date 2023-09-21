
interface ShowProps{
    name: string | undefined | null | number
    surname: string | undefined | null | number
    email: string | undefined | null | number
}

export const ShowUser = ({name, surname, email}: ShowProps)=>{

    return(
        <>
            <main>
              <hr />
              

                <h2>Usuário cadastrado</h2>

                <strong>Nome:  {name}</strong>
                <br />

                <strong>Apelido: {surname}</strong>
                <br />
                
                <strong>E-mail: {email}</strong>

              <br />
              <br />
              <hr/>
            </main>
        </>
    )
}