import cheerio from  'cheerio';
import { URLS } from "../../interface/url.interface"
import {RESPONSE} from "../../constants/response.const"

const NO_RESPONSE = 'NO RESPONSE';


abstract class BaseService {

 
  makeSuccessObject = (response ,addresses) :URLS => {
   const addressIndex =  response.request.headers.addressIndex;
    const $ = cheerio.load(response.body);
     return { hostname: addresses[addressIndex].hostname, address:  addresses[addressIndex].hostname, value: $('title').text() };
  }

  makeNoResponseObject = (error, addresses) :URLS => {
    const errorHostAddress = error.hostname.replace('wwww.', '');
    const addressIndex =  addresses.findIndex((address)=> address.hostname.toString().indexOf(errorHostAddress) !== -1);
      return {
        hostname: addresses[addressIndex].hostname,
        address:  addresses[addressIndex].hostname,
        value: RESPONSE.NO_FOUND
      }
  }

  fetchInvalidURLAddress = (addresses) :URLS[] => {
    return addresses
    .filter((address) => address.value !== null)
  }

}

export default BaseService;