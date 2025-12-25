/**
 * ======================================================================================
 * SECTION 1: CONFIGURATION & CONSTANTS
 * ======================================================================================
 */
const CONFIG = {
    ROLES: { MAFIA: '마피아', CITIZEN: '시민', POLICE: '경찰', DOCTOR: '의사' },
    DISTRIBUTION: {
        4:  { M: 1, P: 0, D: 0 },
        5:  { M: 1, P: 0, D: 0 },
        6:  { M: 1, P: 0, D: 1 },

        7:  { M: 2, P: 1, D: 1 },
        8:  { M: 2, P: 1, D: 1 },
        9:  { M: 2, P: 1, D: 1 },

        10: { M: 3, P: 1, D: 1 },
        11: { M: 3, P: 1, D: 1 },
        12: { M: 3, P: 1, D: 1 },
        13: { M: 3, P: 1, D: 1 },

        14: { M: 4, P: 1, D: 1 },
        15: { M: 4, P: 1, D: 1 },
        16: { M: 4, P: 1, D: 1 },
        17: { M: 4, P: 1, D: 1 },

        18: { M: 5, P: 1, D: 1 },
        19: { M: 5, P: 1, D: 1 },
        20: { M: 5, P: 1, D: 1 },
        21: { M: 5, P: 1, D: 1 },

        22: { M: 6, P: 1, D: 1 },
        23: { M: 6, P: 1, D: 1 },
        24: { M: 6, P: 1, D: 1 },
        25: { M: 6, P: 1, D: 1 },
        
        26: { M: 7, P: 1, D: 1 },
        27: { M: 7, P: 1, D: 1 },
        28: { M: 7, P: 1, D: 1 }
    },
    BALANCE: { BASE_SUSPICION: 10, BASE_ATTENTION: 10, VOTE_THRESHOLD_BASE: 15 }
};

const DIALOGUES = {
    MAFIA: {
        FAKE_POLICE_ATTACK: [
            "제가 경찰입니다. {target} 씨를 조사했는데 마피아였습니다.",
            "더 이상 숨기지 않겠습니다. 경찰인 제가 조사한 결과 {target} 씨는 마피아입니다.",
            "확실합니다. {target} 씨가 범인입니다. 저를 믿고 투표해주세요."
        ],
        FAKE_POLICE_SHIELD: [
            "제가 경찰입니다. {target} 씨는 조사 결과 시민입니다.",
            "{target} 씨는 절대 마피아가 아닙니다. 제 명예를 걸고 보증합니다.",
            "{target} 씨를 의심하지 마세요. 조사 결과 선량한 시민입니다."
        ],
        FAKE_DOCTOR: [
            "제가 의사입니다! 저를 살려두셔야 합니다.",
            "오늘 밤은 저를 치료하겠습니다.",
            "제가 의사입니다. 저를 보호해주셔야 이길 수 있습니다."
        ],
        DEFENSE: [
            "저는 시민입니다. 잘 생각해 보세요.",
            "사람 잘못 보셨습니다. 마피아가 아니에요.",
            "저를 죽이면 시민 패배로 이어질 겁니다."
        ],
        AGREE: [
            "맞습니다. {target} 씨가 확실히 수상합니다.",
            "저도 {target} 씨가 범인이라고 생각합니다.",
            "동감합니다. {target} 씨를 뽑죠."
        ],
        BUS_ALLY: [
            "안타깝지만 {target} 씨의 변명은 통하지 않는 것 같군요.",
            "같은 시민이라 믿었는데 {target} 씨가 마피아였다니… 실망입니다.",
            "증거가 명확하네요. {target} 씨를 처형해야 합니다."
        ]
    },
    POLICE: {
        REVEAL_MAFIA: [
            "주목해 주시겠습니까? 제가 경찰입니다. {target} 씨가 마피아예요.",
            "찾았습니다. {target} 씨가 바로 그 마피아입니다.",
            "경찰입니다. 조사 결과 {target} 씨가 범인입니다. 투표해주세요!"
        ],
        REVEAL_CITIZEN: [
            "조사 결과 {target} 씨는 시민입니다. 제가 보증합니다!",
            "여러분, {target} 씨는 안전합니다. 마피아가 아닙니다.",
            "{target} 씨는 제가 확인한 시민입니다. 의심을 거둬 주세요."
        ],
        START: [
            "제가 경찰입니다. 오늘 밤부터 확실하게 조사하겠습니다.",
            "경찰입니다. 숨어있는 마피아를 반드시 찾아내겠습니다."
        ],
        FAKE_CITIZEN: [
            "저는 시민입니다. 함께 단서를 찾아봅시다.",
            "시민으로서 열심히 추리하겠습니다."
        ],
        COUNTER: [
            "{target} 씨는 가짜입니다! 제가 진짜 경찰입니다.",
            "어디서 경찰 사칭을 합니까? 진짜 경찰은 접니다.",
            "{target} 씨는 거짓말을 하고 있습니다. 제 직업을 걸고 맹세합니다."
        ]
    },
    DOCTOR: {
        REVEAL: [
            "저를 죽이면 안 됩니다. 제가 진짜 의사입니다!",
            "제가 의사입니다. 시민들을 치료하고 있습니다."
        ],
        SELF_HEAL: [
            "오늘 밤은 저를 치료할 테니, 공격해도 소용없을 겁니다.",
            "마피아가 저를 노릴 것 같군요. 오늘 밤은 스스로를 지키겠습니다."
        ],
        PROTECT_POLICE: [
            "경찰이신 {target} 님을 반드시 살리겠습니다.",
            "{target} 님 걱정 마세요. 제가 치료하겠습니다."
        ],
        SUCCESS_REVEAL: [
            "어제 {target} 님을 살린 건 접니다. 제가 진짜 의사입니다.",
            "제가 의사입니다. 어제 {target} 님을 치료해서 살려냈습니다."
        ],
        SUCCESS_SELF_HEAL: [
            "어제 마피아가 저를 노렸지만, 스스로 치료해서 살아남았습니다.",
            "제가 의사입니다. 어제 밤 제 목숨은 제가 직접 구했습니다."
        ]
    },
    CITIZEN: {
        TROLL_POLICE: [
            "사실 제가 경찰일 수도 있죠.",
            "분위기가 너무 무겁네요. 제가 경찰이면 어떡하실래요?"
        ],
        TROLL_DOCTOR: [
            "면허는 없지만 제가 의사입니다.",
            "제가 의사일 수도 있는 거 아닌가요?",
        ],
        DOUBT: [
            "{target} 씨가 너무 수상하지 않나요? 저는 마피아 같습니다.",
            "그냥 느낌인데, {target} 씨가 마피아 아닐까요? 관상이 그래요.",
            "{target} 씨, 말이 너무 없으신데 혹시…?"
        ],
        CONFUSED: [
            "누가 마피아일까요? 정말 모르겠네요.",
            "상황이 너무 복잡하네요. 누가 진실을 말하는 걸까요?",
            "아직은 잘 모르겠습니다. 조금 더 지켜보죠.",
            "모두가 의심스럽습니다. 누구를 믿어야 할지 모르겠어요.",
            "이번 판은 정말 어렵네요."
        ],
        TRUST_CLAIM: [
            "{target} 씨의 주장이 사실일까요? 상황을 잘 봐야겠습니다.",
            "{target} 씨 말을 일단 믿어볼까요?"
        ],
        LOGIC_CHECK: ["{target} 씨가 저번에 했던 말이랑 좀 다른 것 같은데요?", "{target} 씨, 왜 아까는 가만히 계셨나요?"],
        KARMA_ATTACK: ["어제 무고한 시민을 죽인 건 {target} 씨 때문이잖아요. 당신이 마피아죠?", "{target} 씨, 어제 왜 거짓말을 하셨나요?"]
    }
};

function getRandomDialogue(category, subCategory, targetName = "") {
    const list = DIALOGUES[category]?.[subCategory];
    if (!list || list.length === 0) return "...";
    return list[Math.floor(Math.random() * list.length)].replace("{target}", targetName);
}

function isRolePossible(roleType, playerCount) {
    const dist = CONFIG.DISTRIBUTION[playerCount] || CONFIG.DISTRIBUTION[28];
    if (roleType === CONFIG.ROLES.POLICE) return dist.P > 0;
    if (roleType === CONFIG.ROLES.DOCTOR) return dist.D > 0;
    return true;
}

/**
 * ======================================================================================
 * SECTION 2: GAME STATE & PLAYER CLASS
 * ======================================================================================
 */
let players = [];
let dayCount = 0;
let isGodMode = false;
let gameLogData = [];
let manualRoleMap = {};
let publicClaims = []; 
let lastNightHealedId = null; 

class Player {
    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.role = null;
        this.isAlive = true;
        
        this.suspicion = CONFIG.BALANCE.BASE_SUSPICION;
        this.attention = CONFIG.BALANCE.BASE_ATTENTION;
        
        this.claimedRole = null; 
        this.isHidingRole = false; 
        this.declaredSelfHeal = false;
        this.isConfirmed = false;
        this.isProvenCitizen = false;
        this.protected = false;

        this.investigatedLog = [];
        this.knownMafia = [];
        this.knownSafe = []; 
        this.individualSuspicion = {}; 
    }
}

const nameInput = document.getElementById('player-name-input');
function handleInput(e) { if (e.key === 'Enter') addPlayer(); }

function addPlayer(nameStr) {
    const name = (nameStr || nameInput.value).trim();
    if (!name) return;
    if (players.some(p => p.name === name)) return alert("이미 존재하는 이름입니다.");
    
    if (players.length >= 28) return alert("최대 28명까지만 가능합니다.");
    players.push(new Player(name, Date.now() + Math.random()));
    if (!nameStr) nameInput.value = '';
    renderPlayerList();
}

function addRandomPlayers(count) {
    const names = ['가연','나영','다희','라윤','마리','범수','세현','유리','제영','채아','태현','현우'];
    let added = 0;
    let attempts = 0;
    while(added < count && players.length < 28 && attempts < 100) {
        const base = names[Math.floor(Math.random() * names.length)];
        let name = base;
        if (players.some(p => p.name === name)) {
            name = `${base}${Math.floor(Math.random()*999)}`;
        }
        if (!players.some(p => p.name === name)) {
            addPlayer(name);
            added++;
        }
        attempts++;
    }
}

function removePlayer(idx) { players.splice(idx, 1); renderPlayerList(); }
function clearPlayers() { players = []; manualRoleMap = {}; renderPlayerList(); }

function renderPlayerList() {
    const listEl = document.getElementById('player-list');
    listEl.innerHTML = '';
    players.forEach((p, idx) => {
        const fixed = manualRoleMap[p.id] ? `<span class="text-xs text-yellow-400 ml-2">(${manualRoleMap[p.id]})</span>` : '';
        const li = document.createElement('li');
        li.className = "bg-gray-700 px-3 py-2 rounded flex justify-between items-center";
        li.innerHTML = `<span>${idx + 1}. ${p.name}${fixed}</span><button onclick="removePlayer(${idx})" class="text-red-400"><i class="fas fa-times"></i></button>`;
        listEl.appendChild(li);
    });
    document.getElementById('player-count').innerText = players.length;
}

function exportList() { 
    if (players.length === 0) return alert("명단이 없습니다.");
    const names = players.map(p => p.name);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(names));
    const a = document.createElement('a'); a.href = dataStr; a.download = "mafia_players.json";
    document.body.appendChild(a); a.click(); a.remove();
}
function importList(input) { 
    const f = input.files[0]; if(!f) return;
    const r = new FileReader();
    r.onload = e => { 
        try { 
            const n = JSON.parse(e.target.result); 
            clearPlayers(); n.forEach(x => addPlayer(x)); 
            alert("명단을 불러왔습니다."); 
        } catch(err) { alert("불러오기 중 오류가 발생했습니다."); } 
        input.value=''; 
    }; r.readAsText(f);
}

/**
 * ======================================================================================
 * SECTION 3: GAME LOOP & AI LOGIC
 * ======================================================================================
 */

function startGame() {
    if (players.length < 4) return alert("최소 4명이 필요합니다.");
    assignRoles();
    document.getElementById('setup-view').classList.add('hidden');
    document.getElementById('play-view').classList.remove('hidden');
    document.getElementById('game-controls').classList.remove('hidden');
    document.getElementById('game-controls').classList.add('flex');
    document.getElementById('btn-restart-log').classList.add('hidden');
    dayCount = 1;
    gameLogData = [];
    publicClaims = [];
    renderLogs(); renderBoard();
    addLog("게임이 시작되었습니다.", "system");
    updateStatusText("1일차 - 아침");
    document.getElementById('btn-next').innerText = "1일차 시작하기";
    document.getElementById('btn-next').onclick = processDayIntro;
}

function assignRoles() {
    players.forEach(p => {
        p.role = null; p.isAlive = true; p.suspicion = 10; p.attention = 10; 
        p.claimedRole = null; p.isHidingRole = false; p.declaredSelfHeal = false;
        p.investigatedLog = []; p.knownMafia = []; p.knownSafe = [];
        p.individualSuspicion = {}; p.isConfirmed = false; p.isProvenCitizen = false;
    });
            
    players.forEach(p => {
        players.forEach(target => { if (p !== target) p.individualSuspicion[target.id] = 10; });
    });

    let roles = [];
    const dist = CONFIG.DISTRIBUTION[players.length] || CONFIG.DISTRIBUTION[28];
    for(let i=0; i<dist.M; i++) roles.push(CONFIG.ROLES.MAFIA);
    for(let i=0; i<dist.P; i++) roles.push(CONFIG.ROLES.POLICE);
    for(let i=0; i<dist.D; i++) roles.push(CONFIG.ROLES.DOCTOR);
    while(roles.length < players.length) roles.push(CONFIG.ROLES.CITIZEN);
    roles.sort(() => Math.random() - 0.5);
    
    players.forEach((p,i) => { if(manualRoleMap[p.id]) roles[i] = manualRoleMap[p.id]; });
    
    players.forEach((p, i) => {
        p.role = roles[i] || CONFIG.ROLES.CITIZEN;
        if (p.role === CONFIG.ROLES.POLICE && Math.random() < 0.8) p.isHidingRole = true;
        else if (p.role === CONFIG.ROLES.DOCTOR && Math.random() < 0.5) p.isHidingRole = true;
    });

    const mafias = players.filter(p => p.role === CONFIG.ROLES.MAFIA);
    mafias.forEach(m => mafias.forEach(t => { 
        if(m!==t) { m.knownSafe.push(t); m.individualSuspicion[t.id] = 0; } 
    }));
}

function updateStatusText(text) { document.getElementById('game-status-text').innerText = text; }

function processDayIntro() {
    addLog(`🌞 ${dayCount}일차 아침이 밝았습니다.`, "system");
    players.forEach(p => p.declaredSelfHeal = false); 
    updateStatusText(`${dayCount}일차 - 토론`);
    document.getElementById('btn-next').innerText = "토론 진행";
    document.getElementById('btn-next').onclick = processDayDiscuss;
}

function updateIndividualSuspicions(claimer, roleClaim) {
    players.forEach(p => {
        if (!p.isAlive || p === claimer) return;
        if (!p.isHidingRole && p.role === roleClaim && roleClaim !== CONFIG.ROLES.CITIZEN) {
            p.individualSuspicion[claimer.id] = 100;
        }
        if (p.role === CONFIG.ROLES.MAFIA) {
            if (claimer.role !== CONFIG.ROLES.MAFIA && (roleClaim === CONFIG.ROLES.POLICE || roleClaim === CONFIG.ROLES.DOCTOR)) {
                p.individualSuspicion[claimer.id] = 90;
            }
        }
    });
}

        function getEstimatedMafiaCount() {
            let initialMafia = 0;
            players.forEach(p => { if(p.role === CONFIG.ROLES.MAFIA) initialMafia++; });
            let deadMafia = players.filter(p => !p.isAlive && p.role === CONFIG.ROLES.MAFIA).length;
            return initialMafia - deadMafia;
        }

function processDayDiscuss() {
    const survivors = players.filter(p => p.isAlive);
    let targetCount = survivors.length < 10 ? survivors.length : 10;
    let weightedPool = [];
    survivors.forEach(p => { for(let i=0; i<1+(p.attention/10); i++) weightedPool.push(p); });
    const speakers = [];
    
    if (lastNightHealedId) {
        const doctor = survivors.find(p => p.role === CONFIG.ROLES.DOCTOR);
        if (doctor && !speakers.includes(doctor)) speakers.push(doctor);
    }

    let attempts = 0;
    while(speakers.length < targetCount && attempts < 1000) {
        const pick = weightedPool[Math.floor(Math.random() * weightedPool.length)];
        if(!speakers.includes(pick)) speakers.push(pick);
        attempts++;
    }
    if (speakers.length < targetCount) survivors.forEach(p => { if (!speakers.includes(p) && speakers.length < targetCount) speakers.push(p); });

    speakers.forEach(speaker => {
        const result = generateSmartDialogue(speaker, survivors);
        let message = result.text;
        let newClaim = result.claimData; 
        let roleClaim = result.roleClaim; 

        addLog(`[${speaker.name}] ${message}`, "day");

        if (result.isSelfHealDeclaration) {
            speaker.declaredSelfHeal = true;
            speaker.attention += 20;
        }

        if (result.healedTargetId) {
            const target = survivors.find(p => p.id === result.healedTargetId);
            if (target) {
                target.isProvenCitizen = true;
                target.suspicion = 0;
                players.forEach(p => p.individualSuspicion[target.id] = 0);
                speaker.isProvenCitizen = true;
                if (target.id !== speaker.id) {
                    addLog(`🛡️ 의사 [${speaker.name}] 님의 증언으로 [${target.name}] 님은 확정 시민이 되었습니다!`, "system");
                } else {
                    addLog(`🛡️ 자힐에 성공한 의사 [${speaker.name}] 님은 확정 시민입니다!`, "system");
                }
            }
        }

        if (roleClaim) {
            if (roleClaim !== speaker.claimedRole) {
                speaker.claimedRole = roleClaim;
                updateIndividualSuspicions(speaker, roleClaim);
                if (roleClaim !== CONFIG.ROLES.CITIZEN) {
                    const rivals = survivors.filter(p => p !== speaker && p.claimedRole === roleClaim);
                    if (rivals.length > 0) {
                        speaker.suspicion += 50; 
                        rivals.forEach(r => {
                            r.suspicion += 50;
                            addLog(`⚡ 대립 발생! [${speaker.name}] vs [${r.name}]`, "system");
                        });
                    }
                }
            }
        }

        if (newClaim) {
            publicClaims.push({ 
                claimerId: speaker.id, targetId: newClaim.target.id, 
                role: speaker.claimedRole, result: newClaim.result, day: dayCount 
            });
            
            let isRival = false;
            if (speaker.claimedRole && speaker.claimedRole !== CONFIG.ROLES.CITIZEN) {
                if (newClaim.target.claimedRole === speaker.claimedRole) isRival = true;
            }

            if (!isRival) {
                if (newClaim.result === 'MAFIA') {
                    newClaim.target.suspicion += 40;
                    newClaim.target.attention += 20;
                } else if (newClaim.result === 'CITIZEN') {
                    let reduceAmount = 30;
                    if (speaker.isConfirmed) {
                        reduceAmount = 1000;
                        newClaim.target.isProvenCitizen = true;
                        newClaim.target.suspicion = 0;
                        addLog(`🛡️ [${speaker.name}] 님의 보증으로 [${newClaim.target.name}] 님은 확정 시민이 되었습니다.`, "system");
                    } else {
                        newClaim.target.suspicion = Math.max(0, newClaim.target.suspicion - reduceAmount);
                    }
                }
            }
            
            survivors.forEach(p => {
                if (p === speaker) return;
                const trust = 100 - (p.individualSuspicion[speaker.id] || 50);
                if (trust > 60 || speaker.isConfirmed) {
                    if (newClaim.result === 'MAFIA' && !isRival) p.individualSuspicion[newClaim.target.id] += 30;
                    if (newClaim.result === 'CITIZEN') p.individualSuspicion[newClaim.target.id] = 0;
                }
            });
        }
    });

    renderBoard();
    updateStatusText(`${dayCount}일차 - 투표 (지목)`);
    document.getElementById('btn-next').innerText = "1차 투표: 용의자 지목";
    document.getElementById('btn-next').onclick = processPrimaryVote;
}

function generateSmartDialogue(speaker, survivors) {
    let dialogue = "";
    let claimData = null;
    let roleClaim = null;
    let isSelfHealDeclaration = false;
    let healedTargetId = null;
    
    let personalTarget = null;
    let maxPersonalSus = -1;
    survivors.forEach(p => {
        if (p === speaker) return;
        const sus = speaker.individualSuspicion[p.id] || 10;
        if (sus > maxPersonalSus) { maxPersonalSus = sus; personalTarget = p; }
    });

    const canFakePolice = isRolePossible(CONFIG.ROLES.POLICE, players.length);
    const canFakeDoctor = isRolePossible(CONFIG.ROLES.DOCTOR, players.length);

    if (speaker.role === CONFIG.ROLES.MAFIA) {
        const isDayOne = dayCount === 1;
        if (speaker.suspicion > 70 && !speaker.claimedRole) {
            const gamble = Math.random();
            if (gamble < 0.4 && canFakePolice) { roleClaim = CONFIG.ROLES.POLICE; dialogue = getRandomDialogue("MAFIA", "DEFENSE"); }
            else if (gamble < 0.7 && canFakeDoctor) { roleClaim = CONFIG.ROLES.DOCTOR; dialogue = getRandomDialogue("MAFIA", "FAKE_DOCTOR"); }
            else { roleClaim = CONFIG.ROLES.CITIZEN; dialogue = getRandomDialogue("MAFIA", "DEFENSE"); }
        } else if (canFakePolice && !speaker.claimedRole && Math.random() < 0.25) {
            roleClaim = CONFIG.ROLES.POLICE;
            if (isDayOne) { dialogue = getRandomDialogue("POLICE", "START"); }
            else if (Math.random() < 0.6) {
                const target = survivors.find(p => p.role !== CONFIG.ROLES.MAFIA && p !== speaker);
                if (target) { dialogue = getRandomDialogue("MAFIA", "FAKE_POLICE_ATTACK", target.name); claimData = { target: target, result: 'MAFIA' }; }
            } else {
                const team = survivors.find(p => p.role === CONFIG.ROLES.MAFIA && p !== speaker);
                if (team) { dialogue = getRandomDialogue("MAFIA", "FAKE_POLICE_SHIELD", team.name); claimData = { target: team, result: 'CITIZEN' }; }
            }
        } else {
            roleClaim = CONFIG.ROLES.CITIZEN;
            if (personalTarget && maxPersonalSus > 50) dialogue = getRandomDialogue("MAFIA", "AGREE", personalTarget.name);
            else dialogue = getRandomDialogue("CITIZEN", "CONFUSED");
        }
    } else if (speaker.role === CONFIG.ROLES.POLICE) {
        const foundMafia = speaker.knownMafia.find(m => m.isAlive);
        const foundSafe = speaker.knownSafe.find(s => s.isAlive && s !== speaker);
        const counterClaimer = survivors.find(p => p !== speaker && p.claimedRole === CONFIG.ROLES.POLICE);

        if (counterClaimer) {
            if (speaker.isHidingRole && Math.random() < 0.95) speaker.isHidingRole = false;
            if (!speaker.isHidingRole) {
                dialogue = getRandomDialogue("POLICE", "COUNTER", counterClaimer.name);
                roleClaim = CONFIG.ROLES.POLICE; claimData = { target: counterClaimer, result: 'MAFIA' };
            } else {
                roleClaim = CONFIG.ROLES.CITIZEN; dialogue = getRandomDialogue("POLICE", "FAKE_CITIZEN");
            }
        } else if (foundMafia) {
            speaker.isHidingRole = false; roleClaim = CONFIG.ROLES.POLICE;
            dialogue = getRandomDialogue("POLICE", "REVEAL_MAFIA", foundMafia.name); claimData = { target: foundMafia, result: 'MAFIA' };
        } else if (foundSafe && !speaker.isHidingRole) {
            roleClaim = CONFIG.ROLES.POLICE;
            dialogue = getRandomDialogue("POLICE", "REVEAL_CITIZEN", foundSafe.name); claimData = { target: foundSafe, result: 'CITIZEN' };
        } else if (speaker.isHidingRole) { roleClaim = CONFIG.ROLES.CITIZEN; dialogue = getRandomDialogue("POLICE", "FAKE_CITIZEN"); }
        else { roleClaim = CONFIG.ROLES.POLICE; dialogue = getRandomDialogue("POLICE", "START"); }
    } else {
        if (speaker.role === CONFIG.ROLES.DOCTOR) {
            if (lastNightHealedId) {
                const healedTarget = survivors.find(p => p.id === lastNightHealedId);
                if (healedTarget) {
                        speaker.isHidingRole = false;
                        roleClaim = CONFIG.ROLES.DOCTOR;
                    healedTargetId = healedTarget.id;
                    if (healedTarget.id === speaker.id) {
                        dialogue = getRandomDialogue("DOCTOR", "SUCCESS_SELF_HEAL");
                    } else if (dayCount !== 1) {
                        dialogue = getRandomDialogue("DOCTOR", "SUCCESS_REVEAL", healedTarget.name);
                    }
                }
            }

            if (!healedTargetId) {
                if (speaker.isHidingRole && speaker.suspicion < 50) { roleClaim = CONFIG.ROLES.CITIZEN; dialogue = "시민입니다. 공정한 게임 부탁드려요."; }
                else {
                    roleClaim = CONFIG.ROLES.DOCTOR;
                    if (Math.random() < 0.3) { dialogue = getRandomDialogue("DOCTOR", "SELF_HEAL"); isSelfHealDeclaration = true; }
                    else dialogue = getRandomDialogue("DOCTOR", "REVEAL");
                }
            }
        } else {
            roleClaim = CONFIG.ROLES.CITIZEN;
            if (personalTarget && maxPersonalSus > 60) {
                const badHistory = publicClaims.some(c => c.claimerId === personalTarget.id && c.result === 'MAFIA');
                if (badHistory) dialogue = getRandomDialogue("CITIZEN", "KARMA_ATTACK", personalTarget.name);
                else dialogue = getRandomDialogue("CITIZEN", "DOUBT", personalTarget.name);
            } else if (Math.random() < 0.1) {
                if(Math.random()>0.5) dialogue = getRandomDialogue("CITIZEN", "TROLL_POLICE");
                else dialogue = getRandomDialogue("CITIZEN", "TROLL_DOCTOR");
            } else {
                dialogue = getRandomDialogue("CITIZEN", "CONFUSED");
            }
        }
    }
    return { text: dialogue, claimData: claimData, roleClaim: roleClaim, isSelfHealDeclaration: isSelfHealDeclaration, healedTargetId: healedTargetId };
}

function processPrimaryVote() {
    const survivors = players.filter(p => p.isAlive);
    addLog("🗳️ [1차 투표] 가장 의심스러운 사람을 지목합니다.", "system");
    
    const deathRate = (players.length - survivors.length) / players.length;
    const voteThreshold = Math.max(0, CONFIG.BALANCE.VOTE_THRESHOLD_BASE - (deathRate * 30));
            
    const estimatedMafia = getEstimatedMafiaCount();
    const unprovenSurvivors = survivors.filter(p => !p.isConfirmed && !p.isProvenCitizen);
    let eliminationTargets = [];

    if (estimatedMafia > 0 && unprovenSurvivors.length === estimatedMafia) {
        eliminationTargets = unprovenSurvivors;
        addLog(`🔍 확정 시민을 제외하면 남은 용의자(${unprovenSurvivors.length}명)와 남은 마피아 수(${estimatedMafia}명)가 일치합니다!`, "system");
        eliminationTargets.forEach(t => {
            addLog(`👉 [${t.name}] 님은 100% 마피아입니다.`, "system");
            t.suspicion = 100;
        });
    }

    let votes = {};
    survivors.forEach(voter => {
        let target = null; let maxScore = -9999;
        
        const trustedPolice = survivors.find(p => p.isConfirmed && p.claimedRole === CONFIG.ROLES.POLICE);

        const conflictPool = survivors.filter(p => p.claimedRole && p.claimedRole !== CONFIG.ROLES.CITIZEN && survivors.filter(r => r.claimedRole === p.claimedRole).length > 1);

        survivors.forEach(candidate => {
            if (voter === candidate) return;
            let score = (voter.individualSuspicion[candidate.id] || 10) * 1.0;
            score += candidate.suspicion * 1.5; score += candidate.attention * 0.5;
            
            score += (Math.random() * 40) - 10; 

            if (eliminationTargets.includes(candidate)) {
                if (voter.role !== CONFIG.ROLES.MAFIA) score += 9999;
            }

            if (trustedPolice) {
                const claim = publicClaims.find(c => c.claimerId === trustedPolice.id && c.targetId === candidate.id);
                if (claim) {
                    if (claim.result === 'MAFIA') score += 5000;
                    if (claim.result === 'CITIZEN') score -= 5000;
                }
            }

            if (voter.role === CONFIG.ROLES.MAFIA && candidate.role === CONFIG.ROLES.MAFIA) {
                if (candidate.suspicion > 80 || score > 4000) score += 50; else score -= 9999; 
            }

            if (score > maxScore) { maxScore = score; target = candidate; }
        });

        if (target && maxScore > voteThreshold) { 
            if (!votes[target.id]) votes[target.id] = 0; votes[target.id]++;
            addLog(`${voter.name} -> ${target.name} 지목`, "system", true);
        } else { addLog(`${voter.name} 기권`, "system", true); }
    });

    let elected = null; let maxVotes = 0; let resultText = [];
    for(const [id, count] of Object.entries(votes)) {
        const p = survivors.find(p => p.id == id);
        resultText.push(`${p.name}:${count}`);
        if (count > maxVotes) { maxVotes = count; elected = p; }
        else if (count === maxVotes && elected && p.suspicion > elected.suspicion) elected = p;
    }
    addLog(`지목 결과: ${resultText.join(', ') || '표 없음'}`, "day");

    if (elected) {
        addLog(`📢 최다 득표자: [${elected.name}] 님. 처형 찬반 투표를 진행합니다.`, "system");
        document.getElementById('btn-next').innerText = "2차 투표: 처형 찬반";
        document.getElementById('btn-next').onclick = () => processExecutionVote(elected);
    } else {
        addLog("🤷 부결되었습니다. 밤이 됩니다.", "day");
        moveToNight();
    }
    renderBoard();
}

function processExecutionVote(target) {
    const survivors = players.filter(p => p.isAlive);
    addLog(`⚖️ [2차 투표] ${target.name}님을 처형하시겠습니까?`, "system");
    let agreeCount = 0; let disagreeCount = 0;
    const totalSus = survivors.reduce((sum, p) => sum + p.suspicion, 0);
    const avgSus = totalSus / survivors.length;

    const estimatedMafia = getEstimatedMafiaCount();
    const unprovenSurvivors = survivors.filter(p => !p.isConfirmed && !p.isProvenCitizen);
    const isEliminationTarget = (estimatedMafia > 0 && unprovenSurvivors.length === estimatedMafia && unprovenSurvivors.includes(target));

    survivors.forEach(voter => {
        let agree = false;
        const mySus = voter.individualSuspicion[target.id] || 10;
        let relativeDiff = target.suspicion - avgSus;
        let noise = (Math.random() * 0.3) - 0.15;
        let chance = 0.55 + noise;
        if (relativeDiff > 0) chance += (relativeDiff * 0.02); else chance -= 0.1; 
        if (mySus > 60) chance += 0.3; if (target.suspicion > 70) chance += 0.4;
                
        if (isEliminationTarget && voter.role !== CONFIG.ROLES.MAFIA) chance = 10.0;

        const isConflictTarget = survivors.some(p => p !== target && p.claimedRole === target.claimedRole && target.claimedRole !== CONFIG.ROLES.CITIZEN);
        if (isConflictTarget) chance += 0.4;

        publicClaims.forEach(claim => {
            if (claim.targetId === target.id) {
                const trust = 100 - (voter.individualSuspicion[claim.claimerId] || 50);
                if (trust > 60) {
                        if (claim.result === 'MAFIA') chance += 0.8; 
                        if (claim.result === 'CITIZEN') chance -= 0.8;
                }
            }
        });

        if (voter.role === CONFIG.ROLES.MAFIA) {
            if (target.role === CONFIG.ROLES.MAFIA) agree = (target.suspicion > 90); else agree = true; 
        } else if (voter.role === CONFIG.ROLES.POLICE) {
            if (voter.knownMafia.includes(target)) agree = true;
            else if (voter.knownSafe.includes(target)) agree = false;
            else agree = (chance > 0.5);
        } else {
            if (target.isProvenCitizen) agree = false;
            else if (voter.knownSafe.includes(target)) agree = false;
            else agree = (chance > 0.5);
        }
        if (voter === target) agree = false; 
        if (agree) agreeCount++; else disagreeCount++;
    });

    addLog(`찬성: ${agreeCount}표 / 반대: ${disagreeCount}표`, "day");

    if (agreeCount > disagreeCount) {
        target.isAlive = false;
        const team = target.role === CONFIG.ROLES.MAFIA ? "마피아" : "시민 팀";
        if (target.role === CONFIG.ROLES.MAFIA) {
            addLog(`💀 [${target.name}] 처형 확정. 정체는 [마피아]였습니다!`, "death");
        } else {
            addLog(`💀 무고한 시민이 처형되었습니다. [${target.name}] 님의 정체는 [${team}]이었습니다.`, "death");
        }
        addLog(`(비공개) 실제 직업: ${target.role}`, "system", true);

        if (target.role !== CONFIG.ROLES.MAFIA) {
            const accusers = publicClaims.filter(c => c.targetId === target.id && c.result === 'MAFIA');
            const accuserIds = new Set(accusers.map(c => c.claimerId));
            accuserIds.forEach(accId => {
                const accuser = survivors.find(s => s.id === accId);
                if (accuser && accuser.isAlive) {
                    accuser.suspicion += 60; accuser.attention += 30;
                    addLog(`⚡ [${accuser.name}] 님은 무고한 시민을 마피아로 몰았습니다. 의심도가 상승합니다!`, "system");
                }
            });

            if (target.claimedRole && target.claimedRole !== CONFIG.ROLES.CITIZEN) {
                    const rivals = survivors.filter(p => p.claimedRole === target.claimedRole);
                    rivals.forEach(p => {
                        p.suspicion += 60;
                        if (p.isAlive == true) {
                            addLog(`⚡ 진짜가 죽었습니다. 대립하던 [${p.name}] 님은 가짜일 확률이 높습니다!`, "system");
                        }
                    });
            }
        } else {
            publicClaims.forEach(claim => {
                if (claim.targetId === target.id && claim.result === 'MAFIA') {
                    const claimer = survivors.find(p => p.id === claim.claimerId);
                    if (claimer && claimer.claimedRole === CONFIG.ROLES.POLICE) {
                        claimer.isConfirmed = true; claimer.suspicion = 0;
                        players.forEach(p => p.individualSuspicion[claimer.id] = 0);
                        addLog(`🌟 [${claimer.name}] 님의 추리가 적중하여 신뢰도가 상승합니다.`, "system");
                    }
                }
            });
        }
    } else { addLog(`🛡️ 과반수 미달로 처형이 취소되었습니다.`, "day"); }
    
    renderBoard();
    if (checkGameOver()) return;
    moveToNight();
}

function moveToNight() {
    updateStatusText(`${dayCount}일차 - 밤`);
    document.getElementById('btn-next').innerText = "밤 행동 개시";
    document.getElementById('btn-next').onclick = processNight;
}

function processNight() {
    addLog(`🌙 밤이 되었습니다.`, "night");
    players.forEach(p => p.protected = false);
    const survivors = players.filter(p => p.isAlive);
    const mafias = survivors.filter(p => p.role === CONFIG.ROLES.MAFIA);
    const police = survivors.find(p => p.role === CONFIG.ROLES.POLICE);
    const doctor = survivors.find(p => p.role === CONFIG.ROLES.DOCTOR);
    lastNightHealedId = null; 

    if (doctor) {
        let target = null;
        const claimedPolice = survivors.find(p => p.claimedRole === CONFIG.ROLES.POLICE && p !== doctor);
        
        if (claimedPolice) {
            if (Math.random() < 0.5) target = doctor; else target = claimedPolice;
        } else {
            if (doctor.declaredSelfHeal && Math.random() < 0.9) target = doctor; 
            else {
                const vip = survivors.filter(p => p !== doctor && p.role !== CONFIG.ROLES.MAFIA).sort((a,b) => b.attention - a.attention);
                target = (vip.length > 0 && Math.random() < 0.6) ? vip[0] : doctor;
            }
        }
        if (target) { target.protected = true; addLog(`의사 -> ${target.name} 치료 시도`, "night", true); }
    }

    let killTarget = null;
    if (mafias.length > 0) {
        const declaredHealer = survivors.find(p => p.claimedRole === CONFIG.ROLES.DOCTOR && p.declaredSelfHeal);
        let avoidedTarget = null;
        if (declaredHealer && Math.random() < 0.8) {
            avoidedTarget = declaredHealer;
            addLog(`마피아, 자힐 선언한 ${declaredHealer.name} 회피`, "night", true);
        }
        const revealedPolice = survivors.find(p => p.claimedRole === CONFIG.ROLES.POLICE && p.role !== CONFIG.ROLES.MAFIA && p !== avoidedTarget);
        if (revealedPolice) killTarget = revealedPolice;
        else {
            const lowSusCitizen = survivors.filter(p => p.role !== CONFIG.ROLES.MAFIA && p.suspicion < 40 && p !== avoidedTarget);
            if (lowSusCitizen.length > 0) killTarget = lowSusCitizen[Math.floor(Math.random() * lowSusCitizen.length)];
            else {
                    const others = survivors.filter(p => p.role !== CONFIG.ROLES.MAFIA && p !== avoidedTarget);
                    if(others.length) killTarget = others[Math.floor(Math.random() * others.length)];
            }
        
        }
        if (killTarget) addLog(`마피아 -> ${killTarget.name} 습격`, "night", true);
    }

    if (police) {
        const unknown = survivors.filter(p => p !== police && !police.investigatedLog.includes(p.id));
        if (unknown.length > 0) {
            unknown.sort((a,b) => (police.individualSuspicion[b.id]||0) - (police.individualSuspicion[a.id]||0));
            const target = unknown[0];
            police.investigatedLog.push(target.id);
            addLog(`경찰 -> ${target.name} 조사`, "night", true);
            
            if (target.role === CONFIG.ROLES.MAFIA) {
                police.knownMafia.push(target);
                addLog(`경찰, 마피아 발견!`, "night", true);
            } else {
                police.knownSafe.push(target);
            }
        }
    }
    document.getElementById('btn-next').innerText = "다음 날 아침";
    document.getElementById('btn-next').onclick = () => processNightResult({killTarget});
}

function processNightResult(data) {
    dayCount++;
    addLog(`🌅 ${dayCount}일차 아침.`, "system");
    const { killTarget } = data;
    const survivors = players.filter(p => p.isAlive);
    if (killTarget) {
        if (killTarget.protected) {
            addLog(`🩹 의사의 치료 성공! 아무도 죽지 않았습니다.`, "system");
            lastNightHealedId = killTarget.id; 
        } else {
            killTarget.isAlive = false;
            const team = killTarget.role === CONFIG.ROLES.MAFIA ? "마피아" : "시민 팀";
            addLog(`📢 [${killTarget.name}] 사망. 정체는 [${team}]입니다.`, "death");
            addLog(`실제 직업: ${killTarget.role}`, "system", true);
        }
    } else { addLog("아무 일도 없었습니다.", "system"); }
    renderBoard();
    if (checkGameOver()) return;
    updateStatusText(`${dayCount}일차 - 토론`);
    document.getElementById('btn-next').innerText = "토론 진행";
    document.getElementById('btn-next').onclick = processDayDiscuss;
}

function checkGameOver() {
    const survivors = players.filter(p => p.isAlive);
    const mafias = survivors.filter(p => p.role === CONFIG.ROLES.MAFIA);
    const citizens = survivors.filter(p => p.role !== CONFIG.ROLES.MAFIA);
    if (mafias.length === 0) { showEndModal("CITIZEN"); return true; }
    if (mafias.length >= citizens.length) { showEndModal("MAFIA"); return true; }
    return false;
}

function showEndModal(winner) {
    const modal = document.getElementById('game-over-modal');
    const title = document.getElementById('end-title');
    const list = document.getElementById('end-result-list');
    isGodMode = true; renderBoard(); renderLogs();
    title.innerText = winner === "CITIZEN" ? "🎉 시민 승리!" : "🔪 마피아 승리!";
    title.className = winner === "CITIZEN" ? "text-3xl font-bold mb-4 text-green-400" : "text-3xl font-bold mb-4 text-red-500";
    list.innerHTML = players.map(p => `<li class="flex justify-between items-center p-2 border-b border-gray-800 ${!p.isAlive?'opacity-50':''}"><span class="flex items-center gap-2">${p.isAlive?'<i class="fas fa-check text-green-500"></i>':'<i class="fas fa-skull text-gray-500"></i>'} ${p.name}</span><span class="${getRoleColor(p.role)} font-bold">${p.role}</span></li>`).join('');
    modal.classList.remove('hidden'); document.getElementById('game-controls').classList.add('hidden');
}

function closeResultModal() {
    document.getElementById('game-over-modal').classList.add('hidden');
    document.getElementById('btn-restart-log').classList.remove('hidden'); 
}

function resetGame() {
    document.getElementById('game-over-modal').classList.add('hidden');
    document.getElementById('play-view').classList.add('hidden');
    document.getElementById('game-controls').classList.add('hidden');
    document.getElementById('setup-view').classList.remove('hidden'); 
    document.getElementById('btn-restart-log').classList.add('hidden');
    dayCount = 0; isGodMode = false; gameLogData = []; publicClaims = [];
    document.getElementById('god-mode-toggle').checked = false;
    document.getElementById('game-log').innerHTML = '<div class="text-gray-500 text-center italic mt-10">게임이 시작되면 로그가 표시됩니다.</div>';
    updateStatusText("준비 단계");
}

function addLog(text, type, hidden = false) { gameLogData.push({ text, type, hidden }); renderLogs(); }
function renderLogs() {
    const c = document.getElementById('game-log'); c.innerHTML = '';
    gameLogData.forEach(log => {
        if (log.hidden && !isGodMode) return;
        const d = document.createElement('div'); d.className = `log-entry ${log.type==='day'?'log-day':log.type==='night'?'log-night':log.type==='system'?'log-system':'log-death'}`;
        d.innerText = log.hidden ? `[비공개] ${log.text}` : log.text;
        if(log.hidden) d.style.opacity = "0.7";
        c.appendChild(d);
    });
    c.scrollTop = c.scrollHeight;
}
function renderBoard() {
    const c = document.getElementById('player-cards'); c.innerHTML = '';
    players.forEach(p => {
        let roleT = "???"; let roleC = "text-gray-400";
        if (isGodMode) { roleT = p.role; roleC = getRoleColor(p.role); }
        else if (!p.isAlive) { if (p.role === CONFIG.ROLES.MAFIA) { roleT = "마피아"; roleC = "role-mafia"; } else { roleT = "시민 팀"; roleC = "text-gray-400"; } }
        const claimT = p.claimedRole ? `<span class="text-xs text-gray-400 bg-gray-800 px-1 rounded ml-1">주장: ${p.claimedRole}</span>` : "";
        
        let badges = "";
        if (p.isConfirmed) badges += `<span class="bg-blue-500 text-white text-xs px-1 rounded mr-1">신뢰</span>`;
        if (p.isProvenCitizen) badges += `<span class="bg-green-500 text-white text-xs px-1 rounded">시민</span>`;
        c.innerHTML += `<div class="card p-4 rounded shadow-md relative overflow-hidden ${p.isAlive?'alive':'dead'}"><div class="absolute top-0 right-0 p-1">${badges}</div><div class="flex justify-between mb-2 mt-2"><span class="font-bold text-lg truncate">${p.name}</span>${!p.isAlive?'<span class="text-xs bg-red-900 text-red-200 px-1 rounded">사망</span>':''}</div><div class="text-sm font-bold mb-2 ${roleC}"><i class="fas fa-user"></i> ${roleT} ${claimT}</div>${p.isAlive?`<div class="space-y-1 text-xs mt-3"><div class="flex items-center gap-1"><span class="w-8 text-gray-400">의심</span><div class="flex-1 h-1.5 bg-gray-700 rounded"><div class="h-full bg-red-500" style="width:${Math.min(100,p.suspicion)}%"></div></div></div><div class="flex items-center gap-1"><span class="w-8 text-gray-400">주목</span><div class="flex-1 h-1.5 bg-gray-700 rounded"><div class="h-full bg-yellow-500" style="width:${Math.min(100,p.attention)}%"></div></div></div></div>`:''}</div>`;
    });
}
function getRoleColor(r) {
    return r===CONFIG.ROLES.MAFIA?"role-mafia":r===CONFIG.ROLES.POLICE?"role-cop":r===CONFIG.ROLES.DOCTOR?"role-doctor":"role-citizen";
}
function toggleGodMode() { isGodMode = document.getElementById('god-mode-toggle').checked; renderBoard(); renderLogs(); }

function openManualRoleModal() {
    const list = document.getElementById('manual-role-list'); list.innerHTML = '';
    players.forEach(p => {
        const cur = manualRoleMap[p.id] || "";
        list.innerHTML += `<div class="flex justify-between items-center bg-gray-700 p-2 rounded"><span class="text-sm">${p.name}</span><select id="role-${p.id}" class="bg-gray-900 text-xs p-1"><option value="" ${!cur?"selected":""}>랜덤</option><option value="${CONFIG.ROLES.MAFIA}" ${cur===CONFIG.ROLES.MAFIA?"selected":""}>마피아</option><option value="${CONFIG.ROLES.POLICE}" ${cur===CONFIG.ROLES.POLICE?"selected":""}>경찰</option><option value="${CONFIG.ROLES.DOCTOR}" ${cur===CONFIG.ROLES.DOCTOR?"selected":""}>의사</option><option value="${CONFIG.ROLES.CITIZEN}" ${cur===CONFIG.ROLES.CITIZEN?"selected":""}>시민</option></select></div>`;
    });
    document.getElementById('role-modal').classList.remove('hidden');
}
function saveManualRoles() {
    players.forEach(p => { const v = document.getElementById(`role-${p.id}`).value; if(v) manualRoleMap[p.id]=v; else delete manualRoleMap[p.id]; });
    closeRoleModal(); renderPlayerList();
}
function closeRoleModal() { document.getElementById('role-modal').classList.add('hidden'); }

