import React, { useState }                       from 'react';
import Modal                         from '@mui/material/Modal';
import styles                        from "./AddObjectModal.module.css";
import { Button, styled, TextField } from "@mui/material";
import { getNewId }                              from "../../features/goals/goalsSelectors";
import { useAppDispatch, useAppSelector }        from "../../app/hooks";
import { addOneGoal }                            from "../../features/goals/goalsSlice";
import { useSnackbar }                           from "notistack";
import { InlineSelect }                          from "../index";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0074a6',
  },
  '& label': {
    color: 'white',
  },
  '&:hover label': {
    color: '#0074a6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0074a6',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#0074a6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0074a6',
    }
  },
});


const AddObjectModal = ({ open, toggle }: { open: boolean, toggle: () => void }) => {

  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);

  const newId = useAppSelector(getNewId);
  const dispatch = useAppDispatch();

  const onFormSubmit = () => {
    dispatch(addOneGoal({ id: newId, name, description, duration }));
    enqueueSnackbar("Goal was added", { variant: "success" });
    setTimeout(toggle);
  }

  const modalOptions = ["Goal", "Project", "Work"];
  const timingOptions = ["hours / week", "hours", "hours / day"];
  const onSelectChange = (e: string) => {
    console.log('new Value: ', e);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
      >
        <div className={styles.modalContentWrapper}>
          <h1>Add <InlineSelect onChange={onSelectChange} selectOptions={modalOptions}/></h1>
          <div className={styles.inputsGroup}>
            <CssTextField required variant="outlined" label="Goal name"
                          onChange={(e) => setName(e.target.value)}/>
            <CssTextField variant="outlined" label="Goal short description"
                          onChange={(e) => setDescription(e.target.value)}/>
            <h1>
              Set timing: <InlineSelect selectOptions={timingOptions} onChange={(e) => console.log(e)} defaultIndex={1}/>
            </h1>
            <CssTextField required variant="outlined" type="number" label="Duration in hours"
                          onChange={(e) => setDuration(parseInt(e.target.value, 10))}/>

          </div>
          <div className={styles.actionButtons}>
            <Button variant="contained" type="submit" onClick={onFormSubmit}>Submit</Button>
            <Button variant="outlined" color="secondary" type="button" onClick={toggle}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default AddObjectModal;
