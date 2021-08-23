import { Router } from "express";
import path from "path";
import { Container } from "typedi";
import addressService from "../services/v1/addressService";

const addressServiceInstance = Container.get(addressService);

/**
 * Address Resource
 */
export default (app: Router) => {
  /**
   * get request for index.html static page (for demo purpose only)
   */
  app.get("/I/want/title/", async (req, res) => {
    const addressesDetail = await addressServiceInstance.fetchTitleFromURLs(
      req,
      res
    );

    res.render(path.resolve("src/views/address/view"), {
      addressesDetail: addressesDetail,
    });
  });
};
