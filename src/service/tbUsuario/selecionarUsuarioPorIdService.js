import { selecionarUsuarioPorId } from "../../repository/usuarioRepository.js";

export default async function selecionarUsuarioPorIdService(id) {
  let registro = selecionarUsuarioPorId(id)
  return registro;
}