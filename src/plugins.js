import getSvg from "./services/svgService";

const svgPlugin = {
 

    install(app , options) {
        app.config.globalProperties.$svg = (iconName) => {


            return getSvg(iconName);
        }
            
    }
};

export { svgPlugin };