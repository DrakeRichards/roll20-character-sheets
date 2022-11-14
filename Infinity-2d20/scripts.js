var Infinity2d20 = Infinity2d20 || (function() {
    const version = 1.1;

    const attrListOld = [ // Array of all attribute names present on version 0.
        "character_name",
        "MDB",
        "PDB",
        "XPT",
        "Faction",
        "RDB",
        "IWDB",
        "XPS",
        "Heritage",
        "Homeworld",
        "Social_Status",
        "Earnings",
        "Current_Cashflow",
        "Cashflow",
        "Momentum",
        "Morale_Soak",
        "Security_Soak",
        "BTS",
        "Head_Soak",
        "RA_Soak",
        "LA_Soak",
        "Torso_Soak",
        "RL_Soak",
        "LL_Soak",
        "Host_AGI",
        "Host_AWA",
        "Host_BRW",
        "Host_COO",
        "Host_INT",
        "Host_PER",
        "Host_WIL",
        "Host_Skills",
        "Geist_AGI",
        "Geist_AWA",
        "Geist_BRW",
        "Geist_COO",
        "Geist_INT",
        "Geist_PER",
        "Geist_WIL",
        "Geist_Skills",
        "Geist_Vigor",
        "Geist_Firewall",
        "Geist_Resolve",
        "Geist_Soak",
        "FW",
        "FW11b",
        "FW12b",
        "FW13b",
        "FW14b",
        "FW15b",
        "MaxFirewall",
        "FW_max",
        "FW1",
        "FW2",
        "FW3",
        "FW4",
        "FW5",
        "FW6",
        "FW7",
        "FW8",
        "FW9",
        "FW10",
        "FW11",
        "FW12",
        "FW13",
        "FW14",
        "FW15",
        "FW16",
        "FW17",
        "FW18",
        "FW19",
        "FW20",
        "FW21",
        "FW22",
        "FW23",
        "FW24",
        "FW25",
        "FW26",
        "FW27",
        "FW28",
        "FW29",
        "FW30",
        "FW31",
        "FW32",
        "RS",
        "RS11t",
        "RS12t",
        "RS13t",
        "RS14t",
        "RS15t",
        "MaxResolve",
        "RS_max",
        "RS1",
        "RS2",
        "RS3",
        "RS4",
        "RS5",
        "RS6",
        "RS7",
        "RS8",
        "RS9",
        "RS10",
        "RS11",
        "RS12",
        "RS13",
        "RS14",
        "RS15",
        "RS16",
        "RS17",
        "RS18",
        "RS19",
        "RS20",
        "RS21",
        "RS22",
        "RS23",
        "RS24",
        "RS25",
        "RS26",
        "RS27",
        "RS28",
        "RS29",
        "RS30",
        "RS31",
        "RS32",
        "PH",
        "PH11w",
        "PH12w",
        "PH13w",
        "PH14w",
        "PH15w",
        "MaxVigor",
        "PH_max",
        "PH1",
        "PH2",
        "PH3",
        "PH4",
        "PH5",
        "PH6",
        "PH7",
        "PH8",
        "PH9",
        "PH10",
        "PH11",
        "PH12",
        "PH13",
        "PH14",
        "PH15",
        "PH16",
        "PH17",
        "PH18",
        "PH19",
        "PH20",
        "PH21",
        "PH22",
        "PH23",
        "PH24",
        "PH25",
        "PH26",
        "PH27",
        "PH28",
        "PH29",
        "PH30",
        "PH31",
        "PH32",
        "Harm1",
        "Harm2",
        "Harm3",
        "Agility",
        "Acrobatics_Expertise",
        "Acrobatics_Focus",
        "Awareness",
        "Analysis_Expertise",
        "Analysis_Focus",
        "Brawn",
        "Athletics_Expertise",
        "Athletics_Focus",
        "Coordination",
        "Ballistics_Expertise",
        "Ballistics_Focus",
        "Intelligence",
        "Education_Expertise",
        "Education_Focus",
        "Personality",
        "Animal_Handling_Expertise",
        "Animal_Handling_Focus",
        "Willpower",
        "Discipline_Expertise",
        "Discipline_Focus",
        "FactionHandler_Name1",
        "FactionHandler_Name2",
        "FactionHandler_Name3",
        "FactionHandler_Name4",
        "Traits_Name1",
        "Traits_Name2",
        "Traits_Name3",
        "Traits_Name4",
        "Traits_Name5",
        "Traits_Name6",
        "ATallent_Name1",
        "ATallent_Skill1",
        "ATallentt_Effect1",
        "ATallent_Name2",
        "ATallent_Skill2",
        "ATallent_Effect2",
        "ATallent_Name3",
        "ATallent_Namerep1",
        "ATallent_Skillrep1",
        "ATallent_Effectrep1",
        "ATallent_Namerep2",
        "ATallent_Skillrep2",
        "ATallent_Effectrep2",
        "weapon_Name_rep",
        "weapon_Range_rep",
        "weapon_Attribute_rep",
        "weapon_Damagebonus_rep",
        "weapon_Damage_rep",
        "weapon_Mode_rep",
        "weapon_Burst_rep",
        "weapon_Size_rep",
        "weapon_Qualities_rep",
        "RL1",
        "RL2",
        "RL3",
        "RL4",
        "RL5",
        "weapon_GearName1_rep",
        "Gear_Effect1_rep",
        "weapon_GearName2_rep",
        "Age",
        "Languages_Notes",
        "Family_Social_Status",
        "Home_Enviroment",
        "Youth_Event",
        "EducationLP",
        "Adolesent_Event",
        "First_Career",
        "Second_Career",
        "Third_Career",
        "Fourth_Career",
        "Assets",
        "Additional_Notes",
        "cp1",
        "cp2",
        "cp3",
        "cp4",
        "cp5",
        "Refresh",
        "rt1",
        "rt2",
        "rt3",
        "rt4",
        "rt5",
        "Acrobatics",
        "Close_Combat",
        "Close_Combat_Expertise",
        "Close_Combat_Focus",
        "Stealth",
        "Stealth_Expertise",
        "Stealth_Focus",
        "Analysis",
        "Extraplanetary",
        "Extraplanetary_Expertise",
        "Extraplanetary_Focus",
        "Observation",
        "Observation_Expertise",
        "Observation_Focus",
        "Survival",
        "Survival_Expertise",
        "Survival_Focus",
        "Thievery",
        "Thievery_Expertise",
        "Thievery_Focus",
        "Athletics",
        "Resistance",
        "Resistance_Expertise",
        "Resistance_Focus",
        "Ballistics",
        "Pilot",
        "Pilot_Expertise",
        "Pilot_Focus",
        "Space",
        "Space_Expertise",
        "Space_Focus",
        "Education",
        "Hacking",
        "Hacking_Expertise",
        "Hacking_Focus",
        "Medicine",
        "Medicine_Expertise",
        "Medicine_Focus",
        "Psychology",
        "Psychology_Expertise",
        "Psychology_Focus",
        "Science",
        "Science_Expertise",
        "Science_Focus",
        "Tech",
        "Tech_Expertise",
        "Tech_Focus",
        "Animal_Handling",
        "Command",
        "Command_Expertise",
        "Command_Focus",
        "Lifestyle",
        "Lifestyle_Expertise",
        "Lifestyle_Focus",
        "Persuade",
        "Persuade_Expertise",
        "Persuade_Focus",
        "Discipline",
        "FactionHandler_Name5",
        "ATallent_Skill3",
        "ATallent_Effect3",
        "ATallent_Name4",
        "ATallent_Skill4",
        "ATallent_Effect4",
        "ATallent_Name5",
        "ATallent_Skill5",
        "ATallent_Effect5",
        "ATallent_Name6",
        "ATallent_Skill6",
        "ATallent_Effect6",
        "ATallent_Name7",
        "ATallent_Skill7",
        "ATallentt_Effect7",
        "ATallent_Name8",
        "ATallent_Skill8",
        "ATallent_Effect8",
        "ATallent_Name9",
        "ATallent_Skill9",
        "ATallent_Effect9",
        "ATallent_Name10",
        "ATallent_Skill10",
        "ATallent_Effect10",
        "ATallent_Name11",
        "ATallent_Skill11",
        "ATallent_Effect11",
        "ATallent_Name12",
        "ATallent_Skill12",
        "ATallent_Effect12",
        "Combat-Dice",
        "Gear_Effect2_rep",
        "More_add_Notes"
    ];
    
    const attrListNew = [ // Array of all attribute names present on the current sheet.
        "type_tab",
        "tab",
        "character_name",
        "faction",
        "assets",
        "heritage",
        "earnings",
        "age",
        "cashflow",
        "cashflow_max",
        "social_status",
        "shortfalls",
        "infinity_points",
        "refresh",
        "reactions",
        "damage_bonus_infowar",
        "damage_bonus_psywar",
        "damage_bonus_melee",
        "damage_bonus_ranged",
        "xp_total",
        "xp_spent",
        "firewall_max",
        "firewall",
        "breaches",
        "resolve",
        "resolve_max",
        "metanoia",
        "vigour",
        "vigour_max",
        "wounds",
        "harm_1",
        "harm_2",
        "harm_3",
        "soak_security",
        "soak_morale",
        "soak_bts",
        "soak_loc_head",
        "soak_loc_arm_l",
        "soak_loc_arm_r",
        "soak_loc_torso",
        "soak_loc_leg_l",
        "soak_loc_leg_r",
        "item_equipped_armour_1",
        "item_equipped_armour_2",
        "item_equipped_armour_3",
        "item_equipped_armour_qualities",
        "trait_1",
        "trait_2",
        "trait_3",
        "trait_4",
        "trait_5",
        "trait_6",
        "agility",
        "skill_acrobatics_sig",
        "skill_acrobatics_exp",
        "skill_acrobatics_foc",
        "skill_close_combat_sig",
        "skill_close_combat_exp",
        "skill_close_combat_foc",
        "skill_stealth_sig",
        "skill_stealth_exp",
        "skill_stealth_foc",
        "awareness",
        "skill_analysis_sig",
        "skill_analysis_exp",
        "skill_analysis_foc",
        "skill_extraplanetary_sig",
        "skill_extraplanetary_exp",
        "skill_extraplanetary_foc",
        "skill_observation_sig",
        "skill_observation_exp",
        "skill_observation_foc",
        "skill_survival_sig",
        "skill_survival_exp",
        "skill_survival_foc",
        "skill_thievery_sig",
        "skill_thievery_exp",
        "skill_thievery_foc",
        "brawn",
        "skill_athletics_sig",
        "skill_athletics_exp",
        "skill_athletics_foc",
        "skill_resistance_sig",
        "skill_resistance_exp",
        "skill_resistance_foc",
        "coordination",
        "skill_ballistics_sig",
        "skill_ballistics_exp",
        "skill_ballistics_foc",
        "skill_pilot_sig",
        "skill_pilot_exp",
        "skill_pilot_foc",
        "skill_spacecraft_sig",
        "skill_spacecraft_exp",
        "skill_spacecraft_foc",
        "intelligence",
        "skill_education_sig",
        "skill_education_exp",
        "skill_education_foc",
        "skill_hacking_sig",
        "skill_hacking_exp",
        "skill_hacking_foc",
        "skill_medicine_sig",
        "skill_medicine_exp",
        "skill_medicine_foc",
        "skill_psychology_sig",
        "skill_psychology_exp",
        "skill_psychology_foc",
        "skill_science_sig",
        "skill_science_exp",
        "skill_science_foc",
        "skill_tech_sig",
        "skill_tech_exp",
        "skill_tech_foc",
        "personality",
        "skill_animal_handling_sig",
        "skill_animal_handling_exp",
        "skill_animal_handling_foc",
        "skill_command_sig",
        "skill_command_exp",
        "skill_command_foc",
        "skill_lifestyle_sig",
        "skill_lifestyle_exp",
        "skill_lifestyle_foc",
        "skill_persuade_sig",
        "skill_persuade_exp",
        "skill_persuade_foc",
        "willpower",
        "skill_discipline_sig",
        "skill_discipline_exp",
        "skill_discipline_foc",
        "talent_name_1",
        "talent_skill_1",
        "talent_ranks_1",
        "talent_effect_1",
        "talent_name_2",
        "talent_skill_2",
        "talent_ranks_2",
        "talent_effect_2",
        "talent_name_3",
        "talent_skill_3",
        "talent_ranks_3",
        "talent_effect_3",
        "talent_name",
        "talent_skill",
        "talent_ranks",
        "talent_effect",
        "weapon_name",
        "weapon_range",
        "weapon_damage_fixed",
        "weapon_damage_dice",
        "weapon_burst",
        "weapon_size",
        "weapon_ammo",
        "weapon_qualities",
        "weapon_type",
        "weapon_infowar_roll",
        "weapon_psywar_roll",
        "weapon_melee_roll",
        "weapon_ranged_roll",
        "weapon_reloads",
        "gear_name",
        "gear_qty",
        "gear_maintinence",
        "ammo_name",
        "ammo_category",
        "ammo_reloads",
        "ammo_qualities",
        "resource_name",
        "resource_qty",
        "hacking_device_name",
        "hacking_device_claw",
        "hacking_device_sword",
        "hacking_device_shield",
        "hacking_device_gadget",
        "hacking_device_ic",
        "hacking_program_type",
        "hacking_program_rating",
        "hacking_program_name",
        "hacking_program_damage_fixed",
        "hacking_program_damage_dice",
        "hacking_program_qualities",
        "host_type",
        "host_agi",
        "host_awa",
        "host_brw",
        "host_coo",
        "host_int",
        "host_per",
        "host_wil",
        "augmentation_name",
        "augmentation_category",
        "augmentation_type",
        "augmentation_qualities",
        "augmentation_maintinence",
        "host_attributes",
        "description",
        "height",
        "weight",
        "hair",
        "eyes",
        "character_languages",
        "family_social_status",
        "home_environment",
        "youth_event",
        "education",
        "adolescent_event",
        "career_1",
        "career_2",
        "career_3",
        "career_4",
        "previous_faction_1",
        "previous_faction_2",
        "previous_faction_3",
        "lifepath_notes",
        "handler_name",
        "handler_faction",
        "handler_contact",
        "handler_objective",
        "contact_name",
        "contact_notes",
        "likes",
        "dislikes",
        "quirks",
        "phobias",
        "catchphrases",
        "lifestyle_name",
        "lifestyle_rating",
        "lifestyle_maintinence",
        "parent_1",
        "parent_2",
        "spouse",
        "sibling_1",
        "sibling_2",
        "child_1",
        "child_2",
        "extended_family_1",
        "extended_family_2",
        "id_name",
        "id_rating",
        "npc_name",
        "npc_agility[",
        "npc_awareness",
        "npc_brawn",
        "npc_coordination",
        "npc_intelligence",
        "npc_personality",
        "npc_willpower",
        "npc_combat_exp",
        "npc_combat_foc",
        "npc_roll_combat",
        "npc_movement_exp",
        "npc_movement_foc",
        "npc_roll_movement",
        "npc_social_exp",
        "npc_social_foc",
        "npc_roll_social",
        "npc_fortitude_exp",
        "npc_fortitude_foc",
        "npc_roll_fortitude",
        "npc_senses_exp",
        "npc_senses_foc",
        "npc_roll_senses",
        "npc_technical_exp",
        "npc_technical_foc",
        "npc_roll_technical",
        "npc_firewall",
        "npc_firewall_max",
        "npc_resolve",
        "npc_resolve_max",
        "npc_vigour",
        "npc_vigour_max",
        "npc_soak_security",
        "npc_soak_morale",
        "npc_soak_armour",
        "npc_breaches",
        "npc_breaches_max",
        "npc_metanoia",
        "npc_metanoia_max",
        "npc_wounds",
        "npc_wounds_max",
        "npc_attack_name",
        "npc_attack_range",
        "npc_attack_damage_fixed",
        "npc_attack_damage_dice",
        "npc_attack_burst",
        "npc_attack_ammo",
        "npc_attack_qualities",
        "npc_attack_type",
        "npc_attack_infowar_roll",
        "npc_attack_psywar_roll",
        "npc_attack_melee_roll",
        "npc_attack_ranged_roll",
        "npc_type",
        "npc_gear",
        "npc_abilities",
        "geist_name",
        "geist_agility",
        "geist_awareness",
        "geist_brawn",
        "geist_coordination",
        "geist_intelligence",
        "geist_personality",
        "geist_willpower",
        "geist_firewall",
        "geist_firewall_max",
        "geist_resolve",
        "geist_resolve_max",
        "geist_structure",
        "geist_structure_max",
        "geist_soak_security",
        "geist_soak_morale",
        "geist_soak_armour",
        "geist_breaches",
        "geist_breaches_max",
        "geist_metanoia",
        "geist_metanoia_max",
        "geist_faults",
        "geist_faults_max",
        "geist_skill_name",
        "geist_skill_exp",
        "geist_skill_foc",
        "geist_skill_roll",
        "geist_trait",
        "geist_talent_name",
        "geist_talent_skill",
        "geist_talent_ranks",
        "geist_talent_effect",
        "geist_type",
        "geist_avatar",
        "geist_roleplaying",
        "geist_background",
        "geist_notes",
        "shell_name",
        "shell_agility",
        "shell_awareness",
        "shell_brawn",
        "shell_coordination",
        "shell_intelligence",
        "shell_personality",
        "shell_willpower",
        "shell_combat_exp",
        "shell_combat_foc",
        "shell_roll_combat",
        "shell_movement_exp",
        "shell_movement_foc",
        "shell_roll_movement",
        "shell_social_exp",
        "shell_social_foc",
        "shell_roll_social",
        "shell_fortitude_exp",
        "shell_fortitude_foc",
        "shell_roll_fortitude",
        "shell_senses_exp",
        "shell_senses_foc",
        "shell_roll_senses",
        "shell_technical_exp",
        "shell_technical_foc",
        "roll_technical",
        "shell_firewall",
        "shell_firewall_max",
        "shell_resolve",
        "shell_resolve_max",
        "shell_structure",
        "shell_structure_max",
        "shell_soak_security",
        "shell_soak_morale",
        "shell_soak_armour",
        "shell_breaches",
        "shell_breaches_max",
        "shell_metanoia",
        "shell_metanoia_max",
        "shell_faults",
        "shell_faults_max",
        "shell_attack_name",
        "shell_attack_range",
        "shell_attack_damage_fixed",
        "shell_attack_damage_dice",
        "shell_attack_burst",
        "shell_attack_ammo",
        "shell_attack_qualities",
        "shell_attack_type",
        "shell_attack_infowar_roll",
        "shell_attack_psywar_roll",
        "shell_attack_melee_roll",
        "shell_attack_ranged_roll",
        "shell_type",
        "shell_gear",
        "shell_abilities",
        "vehicle_name",
        "vehicle_type",
        "vehicle_cover",
        "vehicle_qualities",
        "vehicle_scale",
        "vehicle_speed",
        "vehicle_brawn",
        "vehicle_brawn_vehicle",
        "vehicle_passengers_max",
        "vehicle_impact_fixed",
        "vehicle_impact_dice",
        "vehicle_impact_type",
        "vehicle_structure",
        "vehicle_structure_max",
        "vehicle_firewall",
        "vehicle_firewall_max",
        "vehicle_armour",
        "vehicle_bts",
        "vehicle_description",
        "vehicle_attack_name",
        "vehicle_attack_range",
        "vehicle_attack_damage_fixed",
        "vehicle_attack_damage_dice",
        "vehicle_attack_burst",
        "vehicle_attack_ammo",
        "vehicle_attack_qualities",
        "vehicle_attack_type",
        "vehicle_attack_infowar_roll",
        "vehicle_attack_psywar_roll",
        "vehicle_attack_melee_roll",
        "vehicle_attack_ranged_roll",
        "vehicle_gear",
        "vehicle_abilities"
    ];

    const repeating_section_details = [ // List of repeating sections from v0.
        {
            section: 'repeating_talents',
            fields: [
                'ATallent_Namerep1',
                'ATallent_Skillrep1',
                'ATallent_Effectrep1',
                'ATallent_Namerep2',
                'ATallent_Skillrep2',
                'ATallent_Effectrep2'
            ]
        },
        {
            section: 'repeating_Weapons',
            fields: [
                'weapon_Name_rep',
                'weapon_Range_rep',
                'weapon_Attribute_rep',
                'weapon_Damagebonus_rep',
                'weapon_Damage_rep',
                'weapon_Mode_rep',
                'weapon_Burst_rep',
                'weapon_Size_rep',
                'weapon_Qualities_rep',
                'RL1',
                'RL2',
                'RL3',
                'RL4',
                'RL5',
                'weapon_name',
                'weapon_range',
                'weapon_damage_fixed',
                'weapon_damage_dice',
                'weapon_damage_action',
                'weapon_burst',
                'weapon_size',
                'weapon_ammo',
                'weapon_qualities',
                'weapon_type',
                'weapon_type',
                'weapon_type',
                'weapon_type',
                'weapon_infowar_roll',
                'weapon_psywar_roll',
                'weapon_melee_roll',
                'weapon_ranged_roll',
                'weapon_reloads'
            ]
        },
        {
            section: 'repeating_Gear',
            fields: [
                'weapon_GearName1_rep',
                'Gear_Effect1_rep',
                'weapon_GearName2_rep',
                'Gear_Effect2_rep'
            ]
        }
    ];

    const baseGet = [...attrListOld, ...attrListNew]; // Combination of all attributes on v0 and above.

    const attrActions = {
        skills: [
            'acrobatics_action',
            'close_combat_action',
            'stealth_action',
            'analysis_action',
            'extraplanetary_action',
            'observation_action',
            'survival_action',
            'thievery_action',
            'athletics_action',
            'resistance_action',
            'ballistics_action',
            'pilot_action',
            'spacecraft_action',
            'education_action',
            'hacking_action',
            'medicine_action',
            'psychology_action',
            'science_action',
            'tech_action',
            'animal_handling_action',
            'command_action',
            'lifestyle_action',
            'persuade_action',
            'discipline_action',
            'npc_combat_action',
            'npc_movement_action',
            'npc_social_action',
            'npc_fortitude_action',
            'npc_senses_action',
            'npc_technical_action',
            'shell_combat_action',
            'shell_movement_action',
            'shell_social_action',
            'shell_fortitude_action',
            'shell_senses_action',
            'shell_technical_action',
            'weapon_damage_action'
        ],

        attributes: [
            'agility_action',
            'awareness_action',
            'brawn_action',
            'coordination_action',
            'intelligence_action',
            'personality_action',
            'willpower_action',
        ]
    };

    const attrActionsStatic = [...attrActions.skills, ...attrActions.attributes];

    const attrActionsRepeating = [
        {
            name: 'repeating_weapons',
            actions: [
                'weapon_damage_action',
                'weapon_infowar_action',
                'weapon_psywar_action',
                'weapon_melee_action',
                'weapon_ranged_action'
            ]
        }
    ];

    const actionsAll = getListenerActions(attrActionsStatic, attrActionsRepeating);
    
    class eventTrigger {
        #reRowId = /(?<=_-)[\w\d]*(?=_)/s;
        #reSection = /^[\w\d]*(?=:)/s;
        #reAction = /(?<=:)[\w\d\-]*$/s;

        /**
         * Parses the trigger info of an action button.
         * @param {str} triggerAttribute The name of the attribute that triggered the event.
         * @param {str} sourceAttribute The sourceAttribute property from the eventInfo object.
         */
        constructor(triggerAttribute, sourceAttribute) {
            console.log(triggerAttribute);
            console.log(sourceAttribute);
            if (sourceAttribute === undefined) {
                this.sourceAttribute = '';
                this.rowId = ''
            } else {
                this.sourceAttribute = sourceAttribute;
                this.rowId = (this.#reRowId.exec(this.sourceAttribute))[0];
            }
            this.section = (this.#reSection.exec(triggerAttribute))[0] || '';
            this.action = (this.#reAction.exec(triggerAttribute))[0] || '';
        }
    };

    class roll {
        /**
         * Generates the roll text for a given event trigger.
         * @param {eventTrigger} eventTrigger The eventTrigger object for the trigger.
         */
        constructor(eventTrigger) {
        };

        // Determine what type of roll this is: skill check or damage?
        // If skill check, is this an attack?
            // If so, then the header is the weapon name. Also need to get the ammo and qualities.
            // If not, header is the skill name.
        // If damage in a repeating section, it has to be an attack. Header is weapon name.
    };

    function openSheet () {
        getSections(updateSheet,baseGet);
    };

    function getSections (callback,getArray,trigger,sections,queue) {
        queue = queue || JSON.parse(JSON.stringify(repeating_section_details));
        getArray = getArray || [];
        sections = sections || {};
        let section = queue.shift();

        getSectionIDs(section.section,(idArray)=>{
            sections[section.section]=[];
            idArray.forEach((id)=>{
                sections[section.section].push(id);
                section.fields.forEach((field)=>{
                    getArray.push(`${section.section}_${id}_${field}`);
                });
            });
            if(_.isEmpty(queue)){
                callback(getArray,sections,trigger);
            }else{
                getSections(callback,getArray,trigger,sections,queue);
            }
        });

    };

    function updateSheet (getArray,sections){
        const setObj = {};
        getAttrs([...getArray,'sheet_version'],(attr)=>{
            console.log("Sheet version detected: " + attr.sheet_version)
            if(!attr.sheet_version){
                attr.sheet_version = 0;
            }
            if(attr.sheet_version*1 < 1.1) {
                updateTo1_0(attr,setObj);
                set(setObj);
            } // Migrate from old sheet to new style.
        });
    };

    function set (obj,callback) {
        setAttrs(obj,{silent:true},callback);
    };

    function updateTo1_0 (attrCurrent, setObj) {
        console.log("Starting migration to 1.1");
        // Migrate the values of each old attribute to their new equivalent.
        // setAttrs takes objects with the property = attribute name and the value = new value.
        // Create a new object with these values.
        // Pass it to setAttrs to set them all at once.

        const importList = [
            'MDB',
            'PDB',
            'XPT',
            'RDB',
            'IWDB',
            'XPS',
            'Current_Cashflow',
            'Cashflow',
            'Morale_Soak',
            'Security_Soak',
            'BTS',
            'Head_Soak',
            'RA_Soak',
            'LA_Soak',
            'Torso_Soak',
            'RL_Soak',
            'LL_Soak',
            'Host_Skills',
            'Geist_AGI',
            'Geist_AWA',
            'Geist_BRW',
            'Geist_COO',
            'Geist_INT',
            'Geist_PER',
            'Geist_WIL',
            'Geist_Skills',
            'Geist_Vigor',
            'Geist_Firewall',
            'Geist_Resolve',
            'FW',
            'MaxFirewall',
            'RS',
            'MaxResolve',
            'PH',
            'MaxVigor',
            'Harm1',
            'Harm2',
            'Harm3',
            'Acrobatics_Expertise',
            'Acrobatics_Focus',
            'Analysis_Expertise',
            'Analysis_Focus',
            'Athletics_Expertise',
            'Athletics_Focus',
            'Ballistics_Expertise',
            'Ballistics_Focus',
            'Education_Expertise',
            'Education_Focus',
            'Animal_Handling_Expertise',
            'Animal_Handling_Focus',
            'Discipline_Expertise',
            'Discipline_Focus',
            'FactionHandler_Name1',
            'FactionHandler_Name2',
            'FactionHandler_Name3',
            'FactionHandler_Name4',
            'Traits_Name1',
            'Traits_Name2',
            'Traits_Name3',
            'Traits_Name4',
            'Traits_Name5',
            'Traits_Name6',
            'ATallent_Name1',
            'ATallent_Skill1',
            'ATallentt_Effect1',
            'Languages_Notes',
            'Family_Social_Status',
            'Home_Enviroment',
            'EducationLP',
            'Adolesent_Event',
            'First_Career',
            'Second_Career',
            'Third_Career',
            'Fourth_Career',
            'Additional_Notes',
            'Acrobatics',
            'Close_Combat',
            'Close_Combat_Expertise',
            'Close_Combat_Focus',
            'Stealth',
            'Stealth_Expertise',
            'Stealth_Focus',
            'Analysis',
            'Extraplanetary',
            'Extraplanetary_Expertise',
            'Extraplanetary_Focus',
            'Observation',
            'Observation_Expertise',
            'Observation_Focus',
            'Survival',
            'Survival_Expertise',
            'Survival_Focus',
            'Thievery',
            'Thievery_Expertise',
            'Thievery_Focus',
            'Athletics',
            'Resistance',
            'Resistance_Expertise',
            'Resistance_Focus',
            'Ballistics',
            'Pilot',
            'Pilot_Expertise',
            'Pilot_Focus',
            'Space',
            'Space_Expertise',
            'Space_Focus',
            'Education',
            'Hacking',
            'Hacking_Expertise',
            'Hacking_Focus',
            'Medicine',
            'Medicine_Expertise',
            'Medicine_Focus',
            'Psychology',
            'Psychology_Expertise',
            'Psychology_Focus',
            'Science',
            'Science_Expertise',
            'Science_Focus',
            'Tech',
            'Tech_Expertise',
            'Tech_Focus',
            'Animal_Handling',
            'Command',
            'Command_Expertise',
            'Command_Focus',
            'Lifestyle',
            'Lifestyle_Expertise',
            'Lifestyle_Focus',
            'Persuade',
            'Persuade_Expertise',
            'Persuade_Focus',
            'Discipline'
        ];

        const migrationList = [
            'damage_bonus_melee',
            'damage_bonus_psywar',
            'xp_total',
            'damage_bonus_ranged',
            'damage_bonus_infowar',
            'xp_spent',
            'cashflow',
            'cashflow_max',
            'soak_morale',
            'soak_security',
            'soak_bts',
            'soak_loc_head',
            'soak_loc_arm_r',
            'soak_loc_arm_l',
            'soak_loc_torso',
            'soak_loc_leg_r',
            'soak_loc_leg_l',
            'host_attributes',
            'geist_agility',
            'geist_awareness',
            'geist_brawn',
            'geist_coordination',
            'geist_intelligence',
            'geist_personality',
            'geist_willpower',
            'geist_notes',
            'geist_structure',
            'geist_firewall',
            'geist_resolve',
            'firewall',
            'firewall_max',
            'resolve',
            'resolve_max',
            'vigour',
            'vigour_max',
            'harm_1',
            'harm_2',
            'harm_3',
            'skill_acrobatics_exp',
            'skill_acrobatics_foc',
            'skill_analysis_exp',
            'skill_analysis_foc',
            'skill_athletics_exp',
            'skill_athletics_foc',
            'skill_ballistics_exp',
            'skill_ballistics_foc',
            'skill_education_exp',
            'skill_education_foc',
            'skill_animal_handling_exp',
            'skill_animal_handling_foc',
            'skill_discipline_exp',
            'skill_discipline_foc',
            'handler_name',
            'handler_faction',
            'handler_objective',
            'handler_contact',
            'trait_1',
            'trait_2',
            'trait_3',
            'trait_4',
            'trait_5',
            'trait_6',
            'talent_name_1',
            'talent_skill_1',
            'talent_effect_1',
            'character_languages',
            'social_status',
            'home_environment',
            'education',
            'adolescent_event',
            'career_1',
            'career_2',
            'career_3',
            'career_4',
            'lifepath_notes',
            'skill_acrobatics_sig',
            'Skill_Close_Combat_sig',
            'Skill_Close_Combat_EXP',
            'Skill_Close_Combat_FOC',
            'skill_stealth_sig',
            'skill_stealth_exp',
            'skill_stealth_foc',
            'skill_analysis_sig',
            'skill_extraplanetary_sig',
            'skill_extraplanetary_exp',
            'skill_extraplanetary_foc',
            'skill_observation_sig',
            'skill_observation_exp',
            'skill_observation_foc',
            'skill_survival_sig',
            'skill_survival_exp',
            'skill_survival_foc',
            'skill_thievery_sig',
            'skill_athletics_exp',
            'skill_thievery_foc',
            'skill_athletics_sig',
            'skill_resistance_sig',
            'skill_resistance_exp',
            'skill_resistance_foc',
            'skill_ballistics_sig',
            'skill_pilot_sig',
            'skill_pilot_exp',
            'skill_pilot_foc',
            'skill_spacecraft_sig',
            'skill_spacecraft_exp',
            'skill_spacecraft_foc',
            'skill_education_sig',
            'skill_hacking_sig',
            'skill_hacking_exp',
            'skill_hacking_foc',
            'skill_medicine_sig',
            'skill_medicine_exp',
            'skill_medicine_foc',
            'skill_psychology_sig',
            'skill_psychology_exp',
            'skill_psychology_foc',
            'skill_science_sig',
            'skill_science_exp',
            'skill_science_foc',
            'skill_tech_sig',
            'skill_tech_exp',
            'skill_tech_foc',
            'skill_animal_handling_Sig',
            'skill_command_sig',
            'skill_command_exp',
            'skill_command_foc',
            'skill_lifestyle_sig',
            'skill_lifestyle_exp',
            'skill_lifestyle_foc',
            'skill_persuade_sig',
            'skill_persuade_exp',
            'skill_persuade_foc',
            'skill_discipline_sig'
        ];

        importList.forEach(function(attr, index) {
            if (attr in attrCurrent) {
                setObj[migrationList[index]] = attrCurrent[attr];
            }
        });

        // REPEATING SECTIONS

        // Talents:
        // Migrate repeating talents FIRST so that we don't end up duplicating them.
        // There is also the repeating talents section, where each id actually needs to be split into two new repeating ids.
        function repeatingToRepeatingTalent (rowId, attrCurrent) {
            var newAttrs = {};
            const oldAttrsA = [
                `repeating_talents_${rowId}_ATallent_Namerep1`,
                `repeating_talents_${rowId}_ATallent_Skillrep1`,
                `repeating_talents_${rowId}_ATallent_Effectrep1`
            ];

            const oldAttrsB = [
                `repeating_talents_${rowId}_ATallent_Namerep2`,
                `repeating_talents_${rowId}_ATallent_Skillrep2`,
                `repeating_talents_${rowId}_ATallent_Effectrep2`
            ];

            const repeatingAttrs = [
                "talent_name",
                "talent_skill",
                //"talent_ranks",
                "talent_effect"
            ];

            var newRowId = generateRowID();
            repeatingAttrs.forEach(function (attr, index) {
                if (oldAttrsA[index] in attrCurrent) {newAttrs[`repeating_talents_${rowId}_${attr}`] = attrCurrent[oldAttrsA[index]];}
                if (oldAttrsB[index] in attrCurrent) {newAttrs[`repeating_talents_${newRowId}_${attr}`] = attrCurrent[oldAttrsB[index]];}
            });
            return newAttrs;
        }

        getSectionIDs("talents", function(idArray) {
            var newAttrs = {};
            for(var i=0; i<idArray.length; i++) {
                newAttrs = {...newAttrs, ...(repeatingToRepeatingTalent(idArray[i], attrCurrent))};
            }
            set(newAttrs);
        });

        // Talent 1 is non-repeating and transferred normally by the above setAttrs function.
        // Talents 2-12 are non-repeating but need to be transferred to repeating sections if they are filled out.

        function staticToRepeatingTalent (talentNumber, attrCurrent, setObj) {
            const repeatingAttrs = [
                "talent_name",
                "talent_skill",
                //"talent_ranks",
                "talent_effect"
            ];

            // Static talent 7 has a typo in its attr name. Check for and correct this.
            var oldAttrs = [];
            if (talentNumber != 7) {
                oldAttrs = [
                    `ATallent_Name${talentNumber}`,
                    `ATallent_Skill${talentNumber}`,
                    `ATallent_Effect${talentNumber}`
                ];
            } else {
                oldAttrs = [
                    `ATallent_Name${talentNumber}`,
                    `ATallent_Skill${talentNumber}`,
                    `ATallentt_Effect7`
                ];
            }

            const newRowId = generateRowID();
            repeatingAttrs.forEach(function (attr, index) {
                if (oldAttrs[index] in attrCurrent) {setObj[`repeating_talents_${newRowId}_${attr}`] = attrCurrent[oldAttrs[index]];}
            });
        }

        for (var currentTalent = 2; currentTalent <= 12; currentTalent++) {
            staticToRepeatingTalent(currentTalent, attrCurrent, setObj);
        }

        // Weapons:
        // All repeating. Transfer each repeating id to a new one.
        function repeatingToRepeatingWeapon (rowId, attrCurrent) {
            var newAttrs = {};
            const oldAttrs = [
                `repeating_Weapons_${rowId}_weapon_Name_rep`,
                `repeating_Weapons_${rowId}_weapon_Range_rep`,
                //`repeating_Weapons_${rowId}_weapon_Attribute_rep`,
                `repeating_Weapons_${rowId}_weapon_Damagebonus_rep`,
                `repeating_Weapons_${rowId}_weapon_Damage_rep`,
                //`repeating_Weapons_${rowId}_weapon_Mode_rep`,
                `repeating_Weapons_${rowId}_weapon_Burst_rep`,
                `repeating_Weapons_${rowId}_weapon_Size_rep`,
                `repeating_Weapons_${rowId}_weapon_Qualities_rep`,
                `repeating_Weapons_${rowId}_RL1`,
                `repeating_Weapons_${rowId}_RL2`,
                `repeating_Weapons_${rowId}_RL3`,
                `repeating_Weapons_${rowId}_RL4`,
                `repeating_Weapons_${rowId}_RL5`
            ];

            const repeatingAttrs = [
                "weapon_name",
                "weapon_range",
                "weapon_damage_fixed",
                "weapon_damage_dice",
                "weapon_burst",
                "weapon_size",
                //"weapon_ammo",
                "weapon_qualities",
                //"weapon_reloads"
            ];

            const oldReloads = [
                `repeating_Weapons_${rowId}_RL1`,
                `repeating_Weapons_${rowId}_RL2`,
                `repeating_Weapons_${rowId}_RL3`,
                `repeating_Weapons_${rowId}_RL4`,
                `repeating_Weapons_${rowId}_RL5`
            ];

            repeatingAttrs.forEach(function (attr, index) {
                if (oldAttrs[index] in attrCurrent) {newAttrs[`repeating_weapons_${rowId}_${attr}`] = attrCurrent[oldAttrs[index]];}
            });

            // Calculate how many reloads are left based on which RL boxes are checked.
            var reloads = 0;
            for (var i=0; i<=oldReloads.length; i++) {
                if (attrCurrent[oldReloads[i]] == "on") {
                    reloads++;
                }
            };
            newAttrs[`repeating_weapons_${rowId}_weapon_reloads`] = reloads;
            return newAttrs;
        }

        getSectionIDs("Weapons", function(idArray) {
            var newAttrs = {};
            for(var i=0; i<idArray.length; i++) {
                newAttrs = {...newAttrs, ...(repeatingToRepeatingWeapon(idArray[i], attrCurrent))};
            }
            set(newAttrs);
        });

        // Gear:
        // All repeating.
        function repeatingToRepeatingGear (rowId, attrCurrent) {
            var newAttrs = {};
            const oldAttrs = [
                `repeating_Gear_${rowId}_weapon_GearName1_rep`,
                `repeating_Gear_${rowId}_Gear_Effect1_rep`,
                `repeating_Gear_${rowId}_weapon_GearName2_rep`,
                `repeating_Gear_${rowId}_Gear_Effect2_rep`
            ];

            oldAttrs.forEach(function (attr, index) {
                if (index == 0) {
                    if (attr in attrCurrent) {newAttrs[`repeating_gear_${rowId}_gear_name`] = attrCurrent[attr];}
                } else {
                    if (attr in attrCurrent) {
                        var newRowId = generateRowID();
                        newAttrs[`repeating_gear_${newRowId}_gear_name`] = attrCurrent[attr];
                    }
                }
            });
            return newAttrs;
        }

        getSectionIDs("Gear", function(idArray) {
            var newAttrs = {};
            for(var i=0; i<idArray.length; i++) {
                newAttrs = {...newAttrs, ...(repeatingToRepeatingGear(idArray[i], attrCurrent, setObj))};
            }
            set(newAttrs);
        });

        setObj.sheet_version = 1.1;
        attrCurrent = {...attrCurrent, ...setObj};
    };

    function titleCase (str) {
        var newstr = str.replaceAll('npc_','');
        var newstr = str.replaceAll('shell_','');
        newstr = newstr.replaceAll('_',' ');
        return newstr
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    function calcCombatDice (rolls) {
        let results = {
            sum: 0,
            effect: 0
        }

        rolls.forEach(roll => {
            switch(roll) {
                case 1:
                    results.sum = results.sum + 1
                    break;
                case 2:
                    results.sum = results.sum + 2
                    break;
                case 6:
                    results.effect = results.effect + 1
                    break;
                default:
                    break;
            }
        });

        return results;
    };

    /**
     * Calculates the number of successes on a skill roll.
     * @param {Object} rollResults Results property from the StartRoll function.
     * @returns Object.successes: Number of successes
     */
    function calcSkillRoll (rollResults) {
        let rolls = rollResults.roll.dice;
        let tn = rollResults.target_number.result;
        let foc = rollResults.skill_foc.result;

        let results = {
            successes: 0
        }

        rolls.forEach(roll => {
            if (roll <= tn) {
                results.successes += 1;
            }
            if (roll <= foc) {
                results.successes += 1;
            }
        });

        return {'roll': results.successes};
    };

    function generateSkillRoll (name) {
        const names = {
            'underscore': name,
            'dash': (name.replaceAll('_','-')),
            'space': titleCase(name)
        };

        const attrOptions = {
            'agility': {
                query: '?{Attribute|Agility,@{agility}|Awareness,@{awareness}|Brawn,@{brawn}|Coordination,@{coordination}|Intelligence,@{intelligence}|Personality,@{personality}|Willpower,@{willpower}}',
                skills: ['acrobatics','close_combat','stealth']
            },
            'awareness': {
                query:'?{Attribute|Awareness,@{awareness}|Agility,@{agility}|Brawn,@{brawn}|Coordination,@{coordination}|Intelligence,@{intelligence}|Personality,@{personality}|Willpower,@{willpower}}',
                skills: ['analysis','extraplanetary','observation','survival','thievery']
            },
            'brawn': {
                query:'?{Attribute|Brawn,@{brawn}|Agility,@{agility}|Awareness,@{awareness}|Coordination,@{coordination}|Intelligence,@{intelligence}|Personality,@{personality}|Willpower,@{willpower}}',
                skills: ['athletics','resistance']
            },
            'coordination': {
                query: '?{Attribute|Coordination,@{coordination}|Agility,@{agility}|Awareness,@{awareness}|Brawn,@{brawn}|Intelligence,@{intelligence}|Personality,@{personality}|Willpower,@{willpower}}',
                skills: ['ballistics','pilot','spacecraft']
            },
            'intelligence': {
                query: '?{Attribute|Intelligence,@{intelligence}|Agility,@{agility}|Awareness,@{awareness}|Brawn,@{brawn}|Coordination,@{coordination}|Personality,@{personality}|Willpower,@{willpower}}',
                skills: ['education','hacking','medicine','psychology','science','tech']
            },
            'personality': {
                query: '?{Attribute|Personality,@{personality}|Agility,@{agility}|Awareness,@{awareness}|Brawn,@{brawn}|Coordination,@{coordination}|Intelligence,@{intelligence}|Willpower,@{willpower}}',
                skills: ['animal_handling','command','lifestyle','persuade']
            },
            'willpower': {
                query: '?{Attribute|Willpower,@{willpower}|Agility,@{agility}|Awareness,@{awareness}|Brawn,@{brawn}|Coordination,@{coordination}|Intelligence,@{intelligence}|Personality,@{personality}}',
                skills: ['discipline']
            },
            'npc_agility': {
                query: '?{Attribute|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Brawn,@{npc_brawn}|Coordination,@{npc_coordination}|Intelligence,@{npc_intelligence}|Personality,@{npc_personality}|Willpower,@{npc_willpower}}',
                skills: ['npc_movement']
            },
            'npc_awareness': {
                query: '?{Attribute|Awareness,@{npc_awareness}|Agility,@{npc_agility}|Brawn,@{npc_brawn}|Coordination,@{npc_coordination}|Intelligence,@{npc_intelligence}|Personality,@{npc_personality}|Willpower,@{npc_willpower}}',
                skills: ['npc_senses']
            },
            'npc_brawn': {
                query: '?{Attribute|Brawn,@{npc_brawn}|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Coordination,@{npc_coordination}|Intelligence,@{npc_intelligence}|Personality,@{npc_personality}|Willpower,@{npc_willpower}}',
                skills: ['npc_fortitude']
            },
            'npc_coordination': {
                query: '?{Attribute|Coordination,@{npc_coordination}|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Brawn,@{npc_brawn}|Intelligence,@{npc_intelligence}|Personality,@{npc_personality}|Willpower,@{npc_willpower}}',
                skills: ['npc_combat']
            },
            'npc_intelligence': {
                query: '?{Attribute|Intelligence,@{npc_intelligence}|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Brawn,@{npc_brawn}|Coordination,@{npc_coordination}|Personality,@{npc_personality}|Willpower,@{npc_willpower}}',
                skills: ['npc_technical']
            },
            'npc_personality': {
                query: '?{Attribute|Personality,@{npc_personality}|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Brawn,@{npc_brawn}|Coordination,@{npc_coordination}|Intelligence,@{npc_intelligence}|Willpower,@{npc_willpower}}',
                skills: ['npc_social']
            },
            'npc_willpower': {
                query: '?{Attribute|Willpower,@{npc_willpower}|Agility,@{npc_agility}|Awareness,@{npc_awareness}|Brawn,@{npc_brawn}|Coordination,@{npc_coordination}|Intelligence,@{npc_intelligence}|Personality,@{npc_personality}}',
                skills: ['npc_fortitude']
            },
            'shell_agility': {
                query: '?{Attribute|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Brawn,@{shell_brawn}|Coordination,@{shell_coordination}|Intelligence,@{shell_intelligence}|Personality,@{shell_personality}|Willpower,@{shell_willpower}}',
                skills: ['shell_movement']
            },
            'shell_awareness': {
                query: '?{Attribute|Awareness,@{shell_awareness}|Agility,@{shell_agility}|Brawn,@{shell_brawn}|Coordination,@{shell_coordination}|Intelligence,@{shell_intelligence}|Personality,@{shell_personality}|Willpower,@{shell_willpower}}',
                skills: ['shell_senses']
            },
            'shell_brawn': {
                query: '?{Attribute|Brawn,@{shell_brawn}|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Coordination,@{shell_coordination}|Intelligence,@{shell_intelligence}|Personality,@{shell_personality}|Willpower,@{shell_willpower}}',
                skills: ['shell_fortitude']
            },
            'shell_coordination': {
                query: '?{Attribute|Coordination,@{shell_coordination}|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Brawn,@{shell_brawn}|Intelligence,@{shell_intelligence}|Personality,@{shell_personality}|Willpower,@{shell_willpower}}',
                skills: ['shell_combat']
            },
            'shell_intelligence': {
                query: '?{Attribute|Intelligence,@{shell_intelligence}|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Brawn,@{shell_brawn}|Coordination,@{shell_coordination}|Personality,@{shell_personality}|Willpower,@{shell_willpower}}',
                skills: ['shell_technical']
            },
            'shell_personality': {
                query: '?{Attribute|Personality,@{shell_personality}|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Brawn,@{shell_brawn}|Coordination,@{shell_coordination}|Intelligence,@{shell_intelligence}|Willpower,@{shell_willpower}}',
                skills: ['shell_social']
            },
            'shell_willpower': {
                query: '?{Attribute|Willpower,@{shell_willpower}|Agility,@{shell_agility}|Awareness,@{shell_awareness}|Brawn,@{shell_brawn}|Coordination,@{shell_coordination}|Intelligence,@{shell_intelligence}|Personality,@{shell_personality}}',
                skills: ['shell_fortitude']
            }
        };

        var roll = "&{template:skillroll} {{target_number=[[QUERY_ATTRIBUTE[Attribute]+@{skill_SKILL_NAME_exp}[Skill EXP]]]}} {{roll=[[?{Number of dice|2}d20cf>[[21-?{Complication Range|1}]]cs<[[@{skill_SKILL_NAME_foc}]]]]}} {{header=SKILLNAME Check}} {{subheader=@{character_name}, Difficulty ?{Difficulty|1}}} {{skill_foc=[[@{skill_SKILL_NAME_foc}]]}}";

        if ((attrActions.attributes).includes(name)) {
            roll = "&{template:skillroll} {{target_number=[[@{ATTR_NAME}[Attribute]]]}} {{roll=[[?{Number of dice|2}d20cf>[[21-?{Complication Range|1}]]cs<[[1]]]]}} {{header=ATTRNAME Check}} {{subheader=@{character_name}, Difficulty ?{Difficulty|1}}} {{skill_foc=[[0]]}}";
            roll = roll.replaceAll('ATTR_NAME', names.underscore);
            roll = roll.replaceAll('ATTRNAME', names.space);
            return roll;
        } else if (name.indexOf('npc_') != -1) {
            roll = "&{template:skillroll} {{target_number=[[QUERY_ATTRIBUTE[Attribute]+@{SKILL_NAME_exp}[Skill EXP]]]}} {{roll=[[?{Number of dice|2}d20cf>[[21-?{Complication Range|1}]]cs<[[@{SKILL_NAME_foc}]]]]}} {{header=SKILLNAME Check}} {{subheader=@{npc_name}, Difficulty ?{Difficulty|1}}} {{skill_foc=[[@{SKILL_NAME_foc}]]}}";
        } else if (name.indexOf('shell_') != -1) {
            roll = "&{template:skillroll} {{target_number=[[QUERY_ATTRIBUTE[Attribute]+@{SKILL_NAME_exp}[Skill EXP]]]}} {{roll=[[?{Number of dice|2}d20cf>[[21-?{Complication Range|1}]]cs<[[@{SKILL_NAME_foc}]]]]}} {{header=SKILLNAME Check}} {{subheader=@{shell_name}, Difficulty ?{Difficulty|1}}} {{skill_foc=[[@{SKILL_NAME_foc}]]}}";
        }

        var attrQuery = '';

        Object.entries(attrOptions).find(([key, value]) => {
            if ((value.skills).includes(name)) {
                attrQuery = value.query;
            }
        });

        roll = roll.replaceAll('QUERY_ATTRIBUTE', attrQuery);
        roll = roll.replaceAll('SKILL_NAME', names.underscore);
        roll = roll.replaceAll('SKILLNAME', names.space);

        return roll;
    };

    function generateAttackRoll (action, section, rowId) {
        const re = /(damage|infowar|psywar|melee|ranged)/g;
        const actionType = (re.exec(action))[0];
        var rollParams = {
            'type': actionType,
            'attribute': '',
            'skill': ''
        };

        switch (actionType) {
            case 'damage':
                break;
            case 'infowar':
                rollParams.attribute = '@{intelligence}';
                rollParams.skill = 'hacking';
                break;
            case 'psywar':
                rollParams.attribute = '@{personality}';
                rollParams.skill = 'persuade';
                break;
            case 'melee':
                rollParams.attribute = '@{brawn}';
                rollParams.skill = 'close_combat'
                break;
            case 'ranged':
                rollParams.attribute = '@{awareness}';
                rollParams.skill = 'ballistics';
                break;
        }

        const rollStr = `&{template:skillroll} {{target_number=[[${rollParams.attribute}[Attribute]+@{skill_${rollParams.skill}_exp}[Skill EXP]]]}} {{roll=[[?{Number of dice|2}d20cf>[[21-?{Complication Range|1}]]cs<[[@{skill_${rollParams.skill}_foc}]]]]}} {{header=@{${section}_-${rowId}_weapon_name} Attack}} {{subheader=@{character_name}, Difficulty ?{Difficulty|1}}} {{skill_foc=[[@{skill_${rollParams.skill}_foc}]]}} {{damage_roll=[Roll damage](~repeating_weapons_weapon_damage)}}`;

        return rollStr;
    };

    function generateCdRoll (rollInfo) {
        var mod = {
            'fixed': {
                'weapon': '',
                'bonusAttr': ''
            },
            'dice': {
                'weapon': '',
                'bonusAttr': ''
            }
        };

        if (rollInfo.type === 'weapon') {
        }

        var templateParams = {
            'template': `&{template:combatdice}`,
            'header': `{{header=${rollInfo.sourceName} Damage}}`,
            'subheader': `{{subheader=@{character_name}}}`,
            'roll': `{{roll=[[?{Number of dice|${rollInfo.dice.count}}d6>6cf0cs6]]}}`,
            'modifier': `{{modifier=[[?{Modifier|2}[Modifier]]]}}`
        };

        var roll = '';

        return roll;

        // &{template:combatdice} {{header=Combat Dice}} {{subheader=Combat Dice}} {{roll=[[?{Number of dice|5}d6>6cf0]]}} {{modifier=[[?{Modifier|2}[Modifier]]]}}
    };

    function getRepeatingActions (sectionDetails) {
        let attrs = {};
        sectionDetails.forEach((section) => {
            getSectionIDs(section.name, (idarray) => {
                let getList = section.actions;
                idarray.forEach((rowId) => {
                    getList.forEach((attr) => {
                        let strAttr = `${section.name}_${rowId}_${attr}_action`;
                        let s = attr.replaceAll('_','-');
                        let strAct = `${section.name}_${rowId}_${s}-action`;
                        attrs[strAttr] = strAct;
                    });
                });
            });
        });
        
        return attrs;
    };

    function updateActionButtons () {
        // I don't know how to use asynchronous functions, so I'll handle the repeating and static attributes separately.
        // Static sections
        getAttrs(["character_name", ...attrActionsStatic], function(v) {
            let attrsToChange = {};
            (attrActionsStatic).forEach(attr => {
                let strAct = attr.replaceAll('_','-');
                let strAttr = attr;
                attrsToChange[strAttr] = "%{" + v["character_name"] + `|${strAct}` + "}";
            });
            setAttrs(attrsToChange);
        });

        // Repeating sections
        const attrRepeatingActions = getRepeatingActions(attrActionsRepeating);
        getAttrs(["character_name", ...(Object.keys(attrRepeatingActions))], (v) => {
            let attrsToChange = {};
            Object.entries(attrRepeatingActions).forEach(([key, value], index) => {
                let strAttr = (Object.keys(attrRepeatingActions))[index];
                let strAct = attrRepeatingActions[key];
                //strAct = strAct.replaceAll('_','-');
                attrsToChange[strAttr] = "%{" + v["character_name"] + `|${strAct}` + "}";
            });
            setAttrs(attrsToChange);
        });


    };

    /**
     * Generates an array of actions to listen for.
     * @param {Array} attrActionsStatic Array of the name of each static attribute to listen for.
     * @param {Object} attrActionsRepeating Object with the repeating field info.
     * @returns Array of all actions to listen for.
     */
    function getListenerActions (attrActionsStatic, attrActionsRepeating) {
        let repeating = [];
        attrActionsRepeating.forEach((section) => {
            // Convert repeating sections list to "repeating_section:character-action" format.
            let actionArray = section.actions;
            actionArray.forEach((action) => {
                let str = action.replaceAll('_','-');
                repeating.push(`${section.name}:${str}`);
            });
        });

        const static = attrActionsStatic.map((a) => a.replaceAll('_','-'));
        
        const arr = [...static, ...repeating];
        return arr;
    }
    
    function registerEventHandlers () {
        on('sheet:opened', openSheet);

        on("sheet:opened change:character_name change:repeating_weapons", updateActionButtons);

        on('clicked:attr-inc', function(info) {
            const split = (info.htmlAttributes.value).split(",");
            let attr = {
                from: {
                    name: split[0],
                    inc: split[1]
                },
                to: {
                    name: (split.length > 2) ? split[2] : "",
                    inc: (split.length > 2) ? split[3] : 0
                }
            };
    
            getAttrs([attr.from.name, attr.to.name], function(values) {
                let setObj = {};
                if ((attr.from.inc == '-1') && (values[attr.from.name] == '0')) {
                    return;
                }
                setObj[attr.from.name] = Number(values[attr.from.name]) + Number(attr.from.inc);
                if (attr.to.name !== "") {
                    setObj[attr.to.name] = Number(values[attr.to.name]) + Number(attr.to.inc);
                }
                setAttrs(setObj);
            });
        });

        on('clicked:rollCombatDice', (info) => {
            startRoll("&{template:combatdice} {{header=Combat Dice}} {{subheader=Combat Dice}} {{roll=[[?{Number of dice|5}d6>6cf0]]}} {{modifier=[[?{Modifier|2}[Modifier]]]}}", (allRolls) => {
                
                const computed = calcCombatDice(allRolls.results.roll.dice);
    
                const computedResults = {
                    roll: computed.sum
                };
    
                finishRoll(allRolls.rollId, computedResults);
            });
        });

        actionsAll.forEach((action) => { // Event listener for all rolling buttons.
            // const attrAct = attr.replaceAll('_','-');
            on(`clicked:${action}`, (info) => {
                console.log(info);
                const triggerInfo = new eventTrigger(action, (info.sourceAttribute));
                console.log(triggerInfo);
                // const rollInfo = new roll(triggerInfo);
                //startRoll(rollInfo.rollString, (allRolls) => {
                //    const computed = calcSkillRoll(allRolls.results).successes;
                //    finishRoll(allRolls.rollId, computed);
                //});
            });
        });
    };

    return {
        'registerEventHandlers': registerEventHandlers
    };

}());

Infinity2d20.registerEventHandlers();