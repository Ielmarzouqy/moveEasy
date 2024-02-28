const HelperServices = require("../../../adapters/services/helper/HelperServices");


class AllHelpersUseCase{
    constructor(){
        this.helperServices = new HelperServices()
    }
    execute = async ()=>{
        try {
            const helpers = await this.helperServices.getAllHeplers()
        return {
            status: 200, 
            message : "retrieve all helpers successfuly", 
            helpers: helpers
        };
        } catch (error) {
            console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
        cars
      };
            
        }
        
    }
}
module.exports = AllHelpersUseCase;