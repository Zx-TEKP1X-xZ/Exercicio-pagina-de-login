import { useState } from "react";
import { useNavigate } from "react-router";



function Login(){
    const navegar = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function eOsGuri(e){
        e.preventDefault();
        console.log('Dados login', {email, senha});
        if (!email, !senha){
            alert('Por obséquio, se espresse adequadamente');
            return;
        }
        navegar('/')
    }
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
                <div className="ard shadow-sm p-4">
                    <div className="login-container">
                        <h2 className="text-center mb-4"> Entrar na conta </h2>
                        <form onSubmit={eOsGuri}>
                            <div>
                            <label >Email: </label>
                                <input type="email" className="form-control" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <label>Senha: </label>
                                <input type="password" className="form-control" placeholder="Digita a bosta da senha ai: " value={senha} onChange={(e) => setSenha(e.target.value)}/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Login;