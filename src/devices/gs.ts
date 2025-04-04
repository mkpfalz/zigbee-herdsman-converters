import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["BRHM8E27W70-I1"],
        model: "BRHM8E27W70-I1",
        vendor: "GS",
        description: "Smart color light bulb",
        extend: [m.light({colorTemp: {range: undefined}, color: true}), m.identify()],
    },
    {
        zigbeeModel: ["BDHM8E27W70-I1"],
        model: "BDHM8E27W70-I1",
        vendor: "GS",
        description: "Smart light bulb",
        extend: [m.light({colorTemp: {range: [153, 370]}}), m.identify()],
    },
    {
        zigbeeModel: ["SGMHM-I1"],
        model: "SGMHM-I1",
        vendor: "GS",
        description: "Methane gas sensor",
        extend: [m.iasZoneAlarm({zoneType: "gas", zoneAttributes: ["alarm_2"]})],
    },
    {
        zigbeeModel: ["SGPHM-I1"],
        model: "SGPHM-I1",
        vendor: "GS",
        description: "Propane gas sensor",
        extend: [m.iasZoneAlarm({zoneType: "gas", zoneAttributes: ["alarm_2"]})],
    },
    {
        zigbeeModel: ["SKHMP30-I1"],
        model: "SKHMP30-I1",
        vendor: "GS",
        description: "Smart socket",
        extend: [m.onOff({powerOnBehavior: false}), m.electricityMeter(), m.identify()],
    },
    {
        zigbeeModel: ["SMHM-I1"],
        model: "SMHM-I1",
        vendor: "GS",
        description: "Motion sensor",
        extend: [
            m.iasZoneAlarm({zoneType: "occupancy", zoneAttributes: ["alarm_1", "tamper", "battery_low"]}),
            m.battery({voltageToPercentage: {min: 2500, max: 3000}, voltage: true}),
        ],
    },
    {
        zigbeeModel: ["SOHM-I1"],
        model: "SOHM-I1",
        vendor: "GS",
        description: "Open and close sensor",
        extend: [m.iasZoneAlarm({zoneType: "contact", zoneAttributes: ["alarm_1", "tamper", "battery_low"]}), m.battery({voltage: true})],
    },
    {
        zigbeeModel: ["SRHMP-I1"],
        model: "SRHMP-I1",
        vendor: "GS",
        description: "Siren",
        meta: {disableDefaultResponse: true},
        extend: [m.ignoreClusterReport({cluster: "genBasic"}), m.iasWarning(), m.battery()],
    },
    {
        zigbeeModel: ["SSHM-I1"],
        model: "SSHM-I1",
        vendor: "GS",
        description: "Smoke detector",
        extend: [m.iasZoneAlarm({zoneType: "smoke", zoneAttributes: ["alarm_1", "tamper", "battery_low"]}), m.battery()],
    },
    {
        zigbeeModel: ["STHM-I1H"],
        model: "STHM-I1H",
        vendor: "GS",
        description: "Temperature and humidity sensor",
        extend: [m.temperature(), m.humidity(), m.battery({voltageToPercentage: {min: 2500, max: 3000}, voltage: true})],
    },
    {
        zigbeeModel: ["SWHM-I1"],
        model: "SWHM-I1",
        vendor: "GS",
        description: "Water leakage sensor",
        extend: [m.iasZoneAlarm({zoneType: "water_leak", zoneAttributes: ["alarm_1", "tamper", "battery_low"]}), m.battery({voltage: true})],
    },
];
