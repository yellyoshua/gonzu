import { AppController } from "@/app/api/controllers";
import { useAppStore } from "../stores";
import { AppTypes } from "../types";

const appController = new AppController();

export const getAppConfig = async () => {
  try {
    useAppStore.getState().dispatch({
      type: AppTypes.GET_CONF_FETCHING,
      payload: { loading: true },
    });
    const { config, error } = await appController.getBlogConfig();
    if (error) {
      throw error;
    }

    useAppStore.getState().dispatch({
      type: AppTypes.GET_CONF_DONE,
      payload: { config, loading: false },
    });
  } catch (error) {
    useAppStore.getState().dispatch({
      type: AppTypes.GET_CONF_FETCHING,
      payload: { loading: false },
    });
  }
};
