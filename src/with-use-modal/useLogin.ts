import {useAlertModal} from './useAlertModal';

export const useLogin = () => {
  const alertModal = useAlertModal();

  const run = () => {
    try {
      throw Error('Passwords do not match!');
    } catch (e) {
      if (e instanceof Error) {
        alertModal.show({
          title: 'Error😭',
          message: e.message,
        });
      }
    }
  };

  return run;
};
