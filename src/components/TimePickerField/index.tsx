import { useState } from "react";
import { Platform, Text } from "react-native";
import { TimePickerButton, TimePickerText } from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TimePickerFieldProps } from "@/interfaces/TimePickerFieldProps";

export function TimePickerField({ onChange, value, error }: TimePickerFieldProps) {
  const [show, setShow] = useState(false);

  const onChangeTime = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      const hours = selectedDate.getHours().toString().padStart(2, '0');
      const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      onChange(timeString);
    }
  };

  return (
    <>
      <TimePickerButton onPress={() => setShow(true)}>
        <TimePickerText>{value || "Selecione uma hora"}</TimePickerText>
      </TimePickerButton>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {show && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display="default"
          onChange={onChangeTime}
          is24Hour={true}
        />
      )}
    </>
  );
};
