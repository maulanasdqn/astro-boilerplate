import ApiService from "@services/api.service";
import { getErrorMessage } from "@util/helpers/index.helper";

ApiService.init(import.meta.env.PUBLIC_POKEMON_API);

const PokemonService = {
  getPokemon: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      transitional: {
        silentJSONParsing: true,
      },
      responseType: "json",
      params: {
        limit: 100,
        offset: 0,
      },
      url: "/pokemon/",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },

  getPokedex: async () => {
    const requestData = {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: "/pokedex/",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw getErrorMessage(error);
    }
  },
};

export default PokemonService;
