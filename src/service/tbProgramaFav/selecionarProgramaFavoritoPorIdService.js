import { selecionarProgramaFavoritoPorId } from "../../repository/programaFavoritoRepository";

export default async function selecionarProgramaFavoritoPorIdService(id) {
  let registro = await selecionarProgramaFavoritoPorId(id)
  return registro;
}
