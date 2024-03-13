import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { set } from '../../../store/features/user/user-slice';
import FormRow from '../../core/FormRow/FormRow';
import Input from '../../core/Input/Input';
import Button from '../../core/Button/Button';

function Intro() {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(set(event.target.value));
  };

  return (
    <div className="px-8 py-24 flex flex-col gap-4 mx-auto w-full max-w-md ">
      <FormRow id="user-name" label="Username">
        <Input
          id="user-name"
          name="user-name"
          type="text"
          placeholder="Enter value"
          value={name}
          onChange={handleNameChange}
          className="w-full"
        />
      </FormRow>
      <Button label="Submit" variant="contained" onClick={() => null} />
    </div>
  );
}

export default Intro;
