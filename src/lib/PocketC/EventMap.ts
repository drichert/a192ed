type ParamOptions = {
	[key: number]: string	
}

type PocketCEvent = {
	name: string,
	paramInfo?: string,
	paramOptions?: ParamOptions,
	details?: string
}

const controllerInfo: string = 'Controller Number'
const noteInfo: string = 'Note Number'
const nrpnInfo: string = 'Manufacturer Dependent'

const pitchOptions: ParamOptions = {
	0: 'Pitch Bend Sens.',
	1: 'Master Fine Tune',
	2: 'Master Coarse Tune'
}

const drumOptions: ParamOptions = {
	13: 'Surdo Mute',
	14: 'Surdo Open',
	15: 'Hi Q',
	16: 'Whip Slap',
	17: 'Scratch Push',
	18: 'Scratch Pull',
	19: 'Finger Snap',
	20: 'Click Noise',
	21: 'Metronome Click',
	22: 'Metronome Bell',
	23: 'Seq Click L',
	24: 'Seq Click H',
	25: 'Brush Tab',
	26: 'Brush Swirl L',
	27: 'Brush Slap',
	28: 'Brush Swirl H',
	29: 'Snare Roll',
	30: 'Castanet',
	31: 'Snare L',
	32: 'Sticks',
	33: 'Bass Drum L',
	34: 'Open Rim Shot',
	35: 'Bass Drum M',
	36: 'Bass Drum H',
	37: 'Side Stick',
	38: 'Snare M',
	39: 'Hand Clap',
	40: 'Snare H',
	41: 'Floor Tom L',
	42: 'Hi Hat Closed',
	43: 'Floor Tom H',
	44: 'Hi-Hat Pedal',
	45: 'Low Tom',
	46: 'Hi-Hat Open',
	47: 'Mid Tom L',
	48: 'Mid Tom M',
	49: 'Crash Cymbal 1',
	50: 'High Tom',
	51: 'Ride Cymbal 1',
	52: 'Chinese Cymbal',
	53: 'Ride Cymbal Cup',
	54: 'Tambourine',
	55: 'Splash Cymbal',
	56: 'Cowbell',
	57: 'Crash Cymbal 2',
	58: 'Vibraslap',
	59: 'Ride Cymbal 2',
	60: 'Bongo H',
	61: 'Bongo L',
	62: 'Conga H Mute',
	63: 'Conga H Open',
	64: 'Conga L',
	65: 'Timbale H',
	66: 'Timbale L',
	67: 'Agogo H'
}

//const EventAttrs: Readonly<Record<string, object>> = {
//	CONTROL_NUMBER: {
//		jj
//	}
//}

// TODO use ReadonlyMap
const EventMap: ReadonlyMap<number, PocketCEvent> = new Map([
	/* 'free' params omitted */
	[0, { name: 'Controller', paramInfo: controllerInfo }],
	/*
	1: { name: 'PitchBend' },
	2: { name: 'MonoAftertouch' },
	3: { name: 'Prg-Change' },
	4: { name: 'PolyAftertouch', paramInfo: noteInfo },
	5: { name: 'Note-On', paramInfo: noteInfo },
	6: { name: 'Note-Off', paramInfo: noteInfo },
	7: { name: 'IncDec', paramInfo: controllerInfo},
	8: { name: 'RPN0_MSB', paramOptions: pitchOptions },
	9: { name: 'RPN0_LSB', paramOptions: pitchOptions },
	10: { name: 'RPN1_MSB' },
	11: { name: 'RPN1_LSB' },
	14: { name: 'RPN127_MSB' },
	15: { name: 'RPN127_LSB' },
	16: { name: 'NRPN0_MSB', paramInfo: nrpnInfo },
	17: { name: 'NRPN0_LSB', paramInfo: nrpnInfo },
	18: { name: 'NRPN1_MSB XG_Multi/GS', paramInfo: nrpnInfo },
	19: { name: 'NRPN1_LSB XG_Multi/GS', paramInfo: nrpnInfo },
	20: { name: 'NRPN8_MSB', paramInfo: nrpnInfo },
	21: { name: 'NRPN8_LSB', paramInfo: nrpnInfo },
	22: { name: 'NRPN9_MSB', paramInfo: nrpnInfo },
	23: { name: 'NRPN9_LSB', paramInfo: nrpnInfo },
	24: { name: 'NRPN10_MSB', paramInfo: nrpnInfo },
	25: { name: 'NRPN10_LSB', paramInfo: nrpnInfo },
	26: { name: 'NRPN20_MSB XG Drum Instr. Cutoff', paramOptions: drumOptions },
	27: { name: 'NRPN20_LSB XG Drum Instr. Cutoff', paramOptions: drumOptions },
	28: { name: 'NRPN21_MSB XG Drum Instr. Resonance', paramOptions: drumOptions },  
	29: { name: 'NRPN21_LSB XG Drum Instr. Resonance', paramOptions: drumOptions },
	30: { name: 'NRPN22_MSB XG Drum Instr. EG Attack', paramOptions: drumOptions },
	31: { name: 'NRPN22_LSB XG Drum Instr. EG Attack', paramOptions: drumOptions },
	32: { name: 'NRPN23_MSB XG Drum Instr. EG Decay', paramOptions: drumOptions },
	33: { name: 'NRPN23_LSB XG Drum Instr. EG Decay', paramOptions: drumOptions },
	34: { name: 'NRPN24_MSB XG/GS Drum Instr. Pitch Coarse', paramOptions: drumOptions },
	35: { name: 'NRPN24_LSB XG/GS Drum Instr. Pitch Coarse', paramOptions: drumOptions },
	36: { name: 'NRPN25_MSB XG Drum Instr. Pitch Fine', paramOptions: drumOptions },
	37: { name: 'NRPN25_LSB XG Drum Instr. Pitch Fine', paramOptions: drumOptions },
	38: { name: 'NRPN26_MSB XG/GS Drum Instr. Level', paramOptions: drumOptions },
	39: { name: 'NRPN26_LSB XG/GS Drum Instr. Level',  paramOptions: drumOptions },
	40: { name: 'NRPN28_MSB XG/GS Drum Instr. Panorama', paramOptions: drumOptions },
	41: { name: 'NRPN28_LSB XG/GS Drum Instr. Panorama', paramOptions: drumOptions },
	42: { name: 'NRPN29_MSB XG/GS Drum Instr. Reverb Send', paramOptions: drumOptions },
	43: { name: 'NRPN29_LSB XG/GS Drum Instr. Reverb Send', paramOptions: drumOptions },
	44: { name: 'NRPN30_MSB XG/GS Drum Instr. Chorus Send', paramOptions: drumOptions },
	45: { name: 'NRPN30_LSB XG/GS Drum Instr. Chorus Send', paramOptions: drumOptions },
	46: { name: 'NRPN31_MSB XG/GS Drum Instr.Variation/Delay Send', paramOptions: drumOptions },
	47: { name: 'NRPN31_LSB XG/GS Drum Instr.Variation/Delay Send', paramOptions: drumOptions },
	48: { name: 'NRPN32_MSB', paramInfo: nrpnInfo },
	49: { name: 'NRPN32_LSB', paramInfo: nrpnInfo },
	50: { name: 'NRPN33_MSB', paramInfo: nrpnInfo },
	51: { name: 'NRPN33_LSB', paramInfo: nrpnInfo },
	52: { name: 'NRPN99_MSB', paramInfo: nrpnInfo },
	53: { name: 'NRPN99_LSB', paramInfo: nrpnInfo },
	54: { name: 'NRPN100_MSB', paramInfo: nrpnInfo },
	55: { name: 'NRPN100_LSB', paramInfo: nrpnInfo },
	56: { name: 'NRPN102_MSB', paramInfo: nrpnInfo },
	57: { name: 'NRPN102_LSB', paramInfo: nrpnInfo },
	58: { name: 'NRPN120_MSB EMU ABS',
	59: { name: 'NRPN120_LSB EMU ABS',
	60: { name: 'NRPN127_MSB SB AWE 32/64',
	61: { name: 'NRPN127_LSB SB AWE 32/64',
	64: { name: 'XG-DRUM (SetupNr=Chn) Pitch Coarse',
	65: { name: 'XG-DRUM (SetupNr=Chn) Pitch Fine',
	66: { name: 'XG-DRUM (SetupNr=Chn) Level',
	67: { name: 'XG-DRUM (SetupNr=Chn) Alternate Group',
	68: { name: 'XG-DRUM (SetupNr=Chn) Panorama',
	69: { name: 'XG-DRUM (SetupNr=Chn) Reverb Send',
	70: { name: 'XG-DRUM (SetupNr=Chn) Chorus Send',
	71: { name: 'XG-DRUM (SetupNr=Chn) Variation Send',
	72: { name: 'XG-DRUM (SetupNr=Chn) Key Assign',
	73: { name: 'XG-DRUM (SetupNr=Chn) Rcv Note Off',
	74: { name: 'XG-DRUM (SetupNr=Chn) Rcv Note On',
	75: { name: 'XG-DRUM (SetupNr=Chn) Cutoff Freq.',
	76: { name: 'XG-DRUM (SetupNr=Chn) Resonance',
	77: { name: 'XG-DRUM (SetupNr=Chn) EG Attack Rate',
	78: { name: 'XG-DRUM (SetupNr=Chn) EG Decay1 Rate',
	79: { name: 'XG-DRUM (SetupNr=Chn) EG Decay2 Rate',
	80: { name: 'XG Multipart',
	81: { name: 'XG AD',
	82: { name: 'XG-Effect',
	83: { name: 'XG-Effect 2Byte',
	84: { name: 'XG-Reverb Type',
	85: { name: 'XG-Chorus Type',
	86: { name: 'XG-Variation Type',
	87: { name: 'XG-EQ',
	88: { name: 'XG-Insertion1',
	*/
	[127, { name: 'No-Event' }]
])

export default EventMap