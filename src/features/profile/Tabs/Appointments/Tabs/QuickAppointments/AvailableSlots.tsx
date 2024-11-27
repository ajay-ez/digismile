import { Box, FormControl, Grid, RadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export interface TimeSlot {
  end_time: string;
  start_time: string;
  status: string;
}

interface SlotsData {
  slotss: TimeSlot[];
}

interface AvailableSlotsProps {
  data: SlotsData;
  // eslint-disable-next-line no-unused-vars
  onSlotSelect: (slot: any) => void;
  selectedSlot: TimeSlot | null;
}

const AvailableSlots: React.FC<AvailableSlotsProps> = ({
  data,
  onSlotSelect,
  selectedSlot
}) => {
  const [sortedSlots, setSortedSlots] = useState<TimeSlot[]>([]);

  const handleChange = (session: TimeSlot) => {
    onSlotSelect(session);
  };

  useEffect(() => {
    const availableSlots = data?.slotss?.filter(
      (slot: any) => slot.status === "available"
    );

    setSortedSlots(availableSlots);
  }, [data]);

  return (
    <Box>
      <h1>
        Choose a Time Slot
      </h1>
      <Box>
        {sortedSlots?.length > 0 ? (
          <Box>
            <Grid
              gap={2}
              justifyContent="end"
            >
              <FormControl>
                <RadioGroup
                  aria-label="time slot"
                  name="time slot"
                  value={selectedSlot?.start_time}
                >
                  <Box maxHeight="240px" overflow="auto" paddingRight="2px">
                    {sortedSlots?.map((session: TimeSlot) => (
                      <Grid
                        key={session.start_time}
                        margin={1}
                        display="flex"
                        alignItems="center"
                        border="1px solid"
                        borderRadius="8px"
                        padding="14px 20px"
                        height="56px"
                        sx={{
                          width: {
                            xs: "341px",
                            sm: "310px",
                            lg: "358px",
                            xl: "370px"
                          }
                        }}
                      >
                        {/* <FormControlLabel
                          control={<Radio />}
                          label={session.start_time + "-" + session.end_time}
                          value={session.start_time}
                          onChange={() => handleChange(session)}
                        /> */}
                      </Grid>
                    ))}
                  </Box>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Box>
        ) : (
          <h1>
            {data?.slotss?.length > 0
              ? "Slots Not Available"
              : "Office is closed on this day"}
          </h1>
        )}
      </Box>
    </Box>
  );
};

export default AvailableSlots;
