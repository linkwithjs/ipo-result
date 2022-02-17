export const getList = async () => {
  try {
    const url =
      "https://iporesult.cdsc.com.np/result/companyShares/fileUploaded?fbclid=IwAR2ARWVO3bhNy6baWYko-iG3NF1TOgFoADA1mykZ2KBINMCuAUSLznHLIa4";
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};
