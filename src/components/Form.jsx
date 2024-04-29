import{ useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const Form = () => {
  const [token, setToken] = useState(null);

  const onChange = (value) => {
    setToken(value);
  };

  return (
    <Card shadow={false} className=" bg-blue-gray-50 p-5 w-[425px]">
      <Typography variant="h4" color="blue-gray">
        Obtén tu certificado
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Para obtener su certificado, solo debe de ingresar su número de documento y descargarlo. 
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Número de documento
          </Typography>
          <Input
            size="lg"
            placeholder="1230123012"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className='flex justify-center mt-5'>
          <ReCAPTCHA
            sitekey="6LewFMspAAAAAF9_SDa2dFVUcQFmI1OhK2cBw2Ds"
            onChange={onChange}
          />
        </div>
        <Button className="mt-6" fullWidth disabled={!token}>
          Buscar
        </Button>
      </form>
    </Card>
  );
};

export default Form;
