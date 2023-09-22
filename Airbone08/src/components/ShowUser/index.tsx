import style from './ShowUser.module.css'
interface ShowProps{
    name: string | undefined | null | number
    surname: string | undefined | null | number
    email: string | undefined | null | number
}

export const ShowUser = ({name, surname, email}: ShowProps)=>{

    return(
        <>
            <main className={style.container}>
                <h2>Usuário cadastrado</h2>

                <div className={style.containerData}>

                  <div className={style.dataUser}>
                    <h5>Nome: </h5>
                    <strong className={style.infoUser}>{name}</strong>
                  </div>

                  <div className={style.dataUser}>
                    <h5>Apelido: </h5>
                    <strong className={style.infoUser}>{surname}</strong>
                  </div>

                  <div className={style.dataUser}>
                    <h5>E-mail: </h5>
                    <strong className={style.infoUser}>{email}</strong>
                  </div>

                </div>


            </main>
        </>
    )
}