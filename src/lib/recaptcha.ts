export const generateRecaptchaToken = async ({
  action,
  token
}: {
  action: string;
  token:string
}): Promise<string> =>
{
  return new Promise((resolve) => {
    grecaptcha.ready(
      () =>
        void (async () => {
          const tokenGet = await grecaptcha.execute(
            token,
            { action },
          );

          resolve(tokenGet);
        })(),
    );
  });
}

