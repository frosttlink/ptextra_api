import adicionarUsuarioService from "../service/tbUsuario/adicionarUsuarioService.js";
import deletarUsuarioService from "../service/tbUsuario/deletarUsuarioService.js";
import alterarUsuarioService from "../service/tbUsuario/alterarUsuarioService.js";
import selecionarUsuarioService from "../service/tbUsuario/selecionarUsuarioService.js";

import { Router } from "express";

const endpoint = Router()

endpoint.post('/usuario', async (req, resp) => {
  try {
    let usuario = req.body

    let idGerado = await adicionarUsuarioService(usuario)
  
    resp.send({
      id: idGerado
    })
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.put('/usuario/:id', async (req, resp) => {
  try {
    let usuario = req.body
    let id = req.params.id

    let linhasAfetadas = await alterarUsuarioService(usuario,id)
  
    resp.status(204).send()
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.delete('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id

    let linhasAfetadas = await deletarUsuarioService(id)
  
    resp.status(204).send()
    
  } catch (error) {
    resp.status(400).send()
  }
})

endpoint.get('/usuario', async (req, resp) => {
  try { 
    let registros = await selecionarUsuarioService()
  
    resp.send(registros)
    
  } catch (error) {
    resp.status(400).send()
  }
})


export default endpoint