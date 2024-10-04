import { selecionarUsuarioPorId } from "../../repository/usuarioRepository";

export default async function selecionarUsuarioPorIdService(id) {
  let registro = selecionarUsuarioPorId(id)
  return registro;
}