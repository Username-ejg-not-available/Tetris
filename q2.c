#define GPIO_OUTPUT_VAL 0x0C
#define GPIO_CTRL_ADDR 0x10012000
#define GPIO_INPUT_VAL 0x00

#define CS 11
#define WR 9
#define RD 10
#define INTR 8

uint8_t int readADC() {
	int i = 0;
	uint32_t val_output;
	uint32_t val_input;
	uint8_t ADC_data;
	// read GPIO output register
	val_output = *(volatile uint32_t*)(GPIO_CTRL_ADDR + GPIO_OUTPUT_VAL);
	// select DAC chip by lowering CS (GPIO pin 11)
	val_output &= ~(1 << CS);
	// start conversion by lowering WR (GPIO pin 9)
	val_output &= ~(1 << WR);
	// updating GPIO output register
	*(volatile uint32_t *)(GPIO_CTRL_ADDR + GPIO_OUTPUT_VAL) = val_output;
	// deselect DAC chip by rising CS (GPIO pin 11)
	val_output ^= (1 << CS)
	// rising WR (GPIO pin 9)
	val_output ^= (1 << WR)
	// updating GPIO output register
	*(volatile uint32_t *)(GPIO_CTRL_ADDR + GPIO_OUTPUT_VAL) = val_output;

	// polling on INTR
	do {
		// read GPIO register
		//I didn't know whether INTR would be in GPIO_INPUT_VAL or GPIO_OUTPUT_VAL
		//but because it is an input pin I chose input val
		val_input = *(volatile uint32_t*)(GPIO_CTRL_ADDR + GPIO_INPUT_VAL);
	} while (!(val_input >> INTR & 0b1));
	// select DAC chip by lowering CS (GPIO pin 11)
	val_output &= ~(1 << CS);
	// start reading by lowering RD (GPIO pin 10)
	val_output &= ~(1 << RD);
	// updating GPIO ouput regsiter
	*(volatile uint32_t *)(GPIO_CTRL_ADDR + GPIO_OUTPUT_VAL) = val_output;

	// read GPIO input register
	val_input = *(volatile uint32_t *)(GPIO_CTRL_ADDR + GPIO_INPUT_VAL);
	// deselect DAC chip by rising CS (GPIO pin 11)
	val_output ^= (1 << CS);
	// rising RD (GPIO pin 9)
	val_output ^= (1 << RD);
	// updating GPIO ouput regsiter
	*(volatile uint32_t *)(GPIO_CTRL_ADDR + GPIO_OUTPUT_VAL) = val_output;
	// select data bits
	ADC_data = val_input & 0xFF;
	// return 8-bit digital value
	return ADC_data;
}
