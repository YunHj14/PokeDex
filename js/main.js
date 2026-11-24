// ===== A조 PokeDex 1세대 전국도감 (No.001 ~ No.151) 데이터 및 나무위키형 상세 뷰 =====
const POKEMON_DATA = [
  {
    "id": 1,
    "no": "No.001",
    "name": "이상해씨",
    "enName": "Bulbasaur",
    "types": [
      "풀",
      "독"
    ],
    "category": "씨앗포켓몬",
    "height": "0.7m",
    "weight": "6.9kg",
    "ability": "심록",
    "hiddenAbility": "엽록소",
    "catchRate": "45",
    "eggGroup": "괴수 / 식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 1,
        "method": "기본"
      },
      {
        "id": 2,
        "method": "Lv.16"
      },
      {
        "id": 3,
        "method": "Lv.32"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "desc": "태어났을 때부터 등에 이상한 씨앗이 심어져 있으며 몸과 함께 자란다.",
    "stats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spa": 65,
      "spd": 65,
      "spe": 45
    }
  },
  {
    "id": 2,
    "no": "No.002",
    "name": "이상해풀",
    "enName": "Ivysaur",
    "types": [
      "풀",
      "독"
    ],
    "category": "씨앗포켓몬",
    "height": "1.0m",
    "weight": "13.0kg",
    "ability": "심록",
    "hiddenAbility": "엽록소",
    "catchRate": "45",
    "eggGroup": "괴수 / 식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 1,
        "method": "기본"
      },
      {
        "id": 2,
        "method": "Lv.16"
      },
      {
        "id": 3,
        "method": "Lv.32"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "desc": "등의 봉우리가 부풀어 오르면 달콤한 냄새가 감돌기 시작한다. 큰 꽃이 필 징조다.",
    "stats": {
      "hp": 60,
      "atk": 62,
      "def": 63,
      "spa": 80,
      "spd": 80,
      "spe": 60
    }
  },
  {
    "id": 3,
    "no": "No.003",
    "name": "이상해꽃",
    "enName": "Venusaur",
    "types": [
      "풀",
      "독"
    ],
    "category": "씨앗포켓몬",
    "height": "2.0m",
    "weight": "100.0kg",
    "ability": "심록",
    "hiddenAbility": "엽록소",
    "catchRate": "45",
    "eggGroup": "괴수 / 식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 1,
        "method": "기본"
      },
      {
        "id": 2,
        "method": "Lv.16"
      },
      {
        "id": 3,
        "method": "Lv.32"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "desc": "태양 에너지를 영양으로 삼아 큰 꽃을 피운다. 비가 내린 다음 날에는 향기가 강해진다.",
    "stats": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spa": 100,
      "spd": 100,
      "spe": 80
    }
  },
  {
    "id": 4,
    "no": "No.004",
    "name": "파이리",
    "enName": "Charmander",
    "types": [
      "불꽃"
    ],
    "category": "도롱뇽포켓몬",
    "height": "0.6m",
    "weight": "8.5kg",
    "ability": "맹화",
    "hiddenAbility": "선파워",
    "catchRate": "45",
    "eggGroup": "괴수 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 4,
        "method": "기본"
      },
      {
        "id": 5,
        "method": "Lv.16"
      },
      {
        "id": 6,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "desc": "태어날 때부터 꼬리의 불꽃이 타오르고 있다. 불꽃이 꺼지면 그 생명이 다하고 만다.",
    "stats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    }
  },
  {
    "id": 5,
    "no": "No.005",
    "name": "리자드",
    "enName": "Charmeleon",
    "types": [
      "불꽃"
    ],
    "category": "화염포켓몬",
    "height": "1.1m",
    "weight": "19.0kg",
    "ability": "맹화",
    "hiddenAbility": "선파워",
    "catchRate": "45",
    "eggGroup": "괴수 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 4,
        "method": "기본"
      },
      {
        "id": 5,
        "method": "Lv.16"
      },
      {
        "id": 6,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "desc": "불타는 꼬리를 휘두르며 날카로운 발톱으로 상대를 베어 가른다. 성격이 매우 거칠다.",
    "stats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    }
  },
  {
    "id": 6,
    "no": "No.006",
    "name": "리자몽",
    "enName": "Charizard",
    "types": [
      "불꽃",
      "비행"
    ],
    "category": "화염포켓몬",
    "height": "1.7m",
    "weight": "90.5kg",
    "ability": "맹화",
    "hiddenAbility": "선파워",
    "catchRate": "45",
    "eggGroup": "괴수 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 4,
        "method": "기본"
      },
      {
        "id": 5,
        "method": "Lv.16"
      },
      {
        "id": 6,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "desc": "암석도 녹여버릴 정도의 작열하는 화염을 내뿜는다. 지상 1400m 상공까지 날아오른다.",
    "stats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    }
  },
  {
    "id": 7,
    "no": "No.007",
    "name": "꼬부기",
    "enName": "Squirtle",
    "types": [
      "물"
    ],
    "category": "꼬마거북포켓몬",
    "height": "0.5m",
    "weight": "9.0kg",
    "ability": "급류",
    "hiddenAbility": "젖은접시",
    "catchRate": "45",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 7,
        "method": "기본"
      },
      {
        "id": 8,
        "method": "Lv.16"
      },
      {
        "id": 9,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "desc": "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다.",
    "stats": {
      "hp": 44,
      "atk": 48,
      "def": 65,
      "spa": 50,
      "spd": 64,
      "spe": 43
    }
  },
  {
    "id": 8,
    "no": "No.008",
    "name": "어니부기",
    "enName": "Wartortle",
    "types": [
      "물"
    ],
    "category": "거북포켓몬",
    "height": "1.0m",
    "weight": "22.5kg",
    "ability": "급류",
    "hiddenAbility": "젖은접시",
    "catchRate": "45",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 7,
        "method": "기본"
      },
      {
        "id": 8,
        "method": "Lv.16"
      },
      {
        "id": 9,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "desc": "복슬복슬한 귀와 꼬리가 특징이다. 장수하는 포켓몬의 상징으로 여겨진다.",
    "stats": {
      "hp": 59,
      "atk": 63,
      "def": 80,
      "spa": 65,
      "spd": 80,
      "spe": 58
    }
  },
  {
    "id": 9,
    "no": "No.009",
    "name": "거북왕",
    "enName": "Blastoise",
    "types": [
      "물"
    ],
    "category": "껍질포켓몬",
    "height": "1.6m",
    "weight": "85.5kg",
    "ability": "급류",
    "hiddenAbility": "젖은접시",
    "catchRate": "45",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 7,
        "method": "기본"
      },
      {
        "id": 8,
        "method": "Lv.16"
      },
      {
        "id": 9,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "desc": "등껍질에 달린 분사구에서 두꺼운 철판도 뚫어버리는 강력한 물대포를 발사한다.",
    "stats": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spa": 85,
      "spd": 105,
      "spe": 78
    }
  },
  {
    "id": 10,
    "no": "No.010",
    "name": "캐터피",
    "enName": "Caterpie",
    "types": [
      "벌레"
    ],
    "category": "애벌레포켓몬",
    "height": "0.3m",
    "weight": "2.9kg",
    "ability": "인분",
    "hiddenAbility": "도주",
    "catchRate": "255",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 10,
        "method": "기본"
      },
      {
        "id": 11,
        "method": "Lv.7"
      },
      {
        "id": 12,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "desc": "빨간 더듬이에서 강렬한 냄새를 내뿜어 적을 쫓아낸다. 탈피를 거듭하며 자란다.",
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spa": 20,
      "spd": 20,
      "spe": 45
    }
  },
  {
    "id": 11,
    "no": "No.011",
    "name": "단데기",
    "enName": "Metapod",
    "types": [
      "벌레"
    ],
    "category": "번데기포켓몬",
    "height": "0.7m",
    "weight": "9.9kg",
    "ability": "탈피",
    "hiddenAbility": "없음",
    "catchRate": "120",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 10,
        "method": "기본"
      },
      {
        "id": 11,
        "method": "Lv.7"
      },
      {
        "id": 12,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "desc": "단단한 껍질로 둘러싸여 있지만 안쪽은 부드럽다. 진화를 위해 조용히 때를 기다린다.",
    "stats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 30
    }
  },
  {
    "id": 12,
    "no": "No.012",
    "name": "버터플",
    "enName": "Butterfree",
    "types": [
      "벌레",
      "비행"
    ],
    "category": "나비포켓몬",
    "height": "1.1m",
    "weight": "32.0kg",
    "ability": "복안",
    "hiddenAbility": "색안경",
    "catchRate": "45",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 10,
        "method": "기본"
      },
      {
        "id": 11,
        "method": "Lv.7"
      },
      {
        "id": 12,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "desc": "날개에 물을 튕겨내는 가루가 묻어 있어 비가 오는 날에도 꽃의 꿀을 모으러 날아다닌다.",
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spa": 90,
      "spd": 80,
      "spe": 70
    }
  },
  {
    "id": 13,
    "no": "No.013",
    "name": "뿔충이",
    "enName": "Weedle",
    "types": [
      "벌레",
      "독"
    ],
    "category": "송충이포켓몬",
    "height": "0.3m",
    "weight": "3.2kg",
    "ability": "인분",
    "hiddenAbility": "도주",
    "catchRate": "255",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 13,
        "method": "기본"
      },
      {
        "id": 14,
        "method": "Lv.7"
      },
      {
        "id": 15,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "desc": "숲이나 풀밭에 많이 서식한다. 머리 끝에 5cm 정도의 날카로운 독침을 가지고 있다.",
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 20,
      "spd": 20,
      "spe": 50
    }
  },
  {
    "id": 14,
    "no": "No.014",
    "name": "딱충이",
    "enName": "Kakuna",
    "types": [
      "벌레",
      "독"
    ],
    "category": "번데기포켓몬",
    "height": "0.6m",
    "weight": "10.0kg",
    "ability": "탈피",
    "hiddenAbility": "없음",
    "catchRate": "120",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 13,
        "method": "기본"
      },
      {
        "id": 14,
        "method": "Lv.7"
      },
      {
        "id": 15,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "desc": "거의 움직이지 않지만 위험이 닥치면 독침을 세워 찌르며 몸을 지킨다.",
    "stats": {
      "hp": 45,
      "atk": 25,
      "def": 50,
      "spa": 25,
      "spd": 25,
      "spe": 35
    }
  },
  {
    "id": 15,
    "no": "No.015",
    "name": "독침붕",
    "enName": "Beedrill",
    "types": [
      "벌레",
      "독"
    ],
    "category": "독벌포켓몬",
    "height": "1.0m",
    "weight": "29.5kg",
    "ability": "벌레의알림",
    "hiddenAbility": "스나이퍼",
    "catchRate": "45",
    "eggGroup": "벌레",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 13,
        "method": "기본"
      },
      {
        "id": 14,
        "method": "Lv.7"
      },
      {
        "id": 15,
        "method": "Lv.10"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "desc": "양손과 엉덩이에 있는 3개의 독침으로 상대를 연속해서 찌르며 고속으로 날아다닌다.",
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 40,
      "spa": 45,
      "spd": 80,
      "spe": 75
    }
  },
  {
    "id": 16,
    "no": "No.016",
    "name": "구구",
    "enName": "Pidgey",
    "types": [
      "노말",
      "비행"
    ],
    "category": "아기새포켓몬",
    "height": "0.3m",
    "weight": "1.8kg",
    "ability": "날카로운눈",
    "hiddenAbility": "부풀린가슴",
    "catchRate": "255",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 16,
        "method": "기본"
      },
      {
        "id": 17,
        "method": "Lv.18"
      },
      {
        "id": 18,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "desc": "싸움을 좋아하지 않는 온순한 성격이다. 모래를 뿌려 적의 시야를 가리고 도망친다.",
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 35,
      "spd": 35,
      "spe": 56
    }
  },
  {
    "id": 17,
    "no": "No.017",
    "name": "피죤",
    "enName": "Pidgeotto",
    "types": [
      "노말",
      "비행"
    ],
    "category": "새포켓몬",
    "height": "1.1m",
    "weight": "30.0kg",
    "ability": "날카로운눈",
    "hiddenAbility": "부풀린가슴",
    "catchRate": "120",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 16,
        "method": "기본"
      },
      {
        "id": 17,
        "method": "Lv.18"
      },
      {
        "id": 18,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "desc": "넓은 영역을 가지고 있으며 침입자가 나타나면 날카로운 발톱으로 철저히 쫓아낸다.",
    "stats": {
      "hp": 63,
      "atk": 60,
      "def": 55,
      "spa": 50,
      "spd": 50,
      "spe": 71
    }
  },
  {
    "id": 18,
    "no": "No.018",
    "name": "피죤투",
    "enName": "Pidgeot",
    "types": [
      "노말",
      "비행"
    ],
    "category": "새포켓몬",
    "height": "1.5m",
    "weight": "39.5kg",
    "ability": "날카로운눈",
    "hiddenAbility": "부풀린가슴",
    "catchRate": "45",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 16,
        "method": "기본"
      },
      {
        "id": 17,
        "method": "Lv.18"
      },
      {
        "id": 18,
        "method": "Lv.36"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "desc": "아름다운 깃털을 펼치며 상대를 위협한다. 마하 2의 속도로 하늘을 날 수 있다.",
    "stats": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spa": 70,
      "spd": 70,
      "spe": 101
    }
  },
  {
    "id": 19,
    "no": "No.019",
    "name": "꼬렛",
    "enName": "Rattata",
    "types": [
      "노말"
    ],
    "category": "쥐포켓몬",
    "height": "0.3m",
    "weight": "3.5kg",
    "ability": "도주",
    "hiddenAbility": "의기양양",
    "catchRate": "255",
    "eggGroup": "육상",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 19,
        "method": "기본"
      },
      {
        "id": 20,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "desc": "어디에나 살 수 있는 강한 생명력을 지녔다. 평생 자라는 앞니를 깎기 위해 단단한 것을 갉는다.",
    "stats": {
      "hp": 30,
      "atk": 56,
      "def": 35,
      "spa": 25,
      "spd": 35,
      "spe": 72
    }
  },
  {
    "id": 20,
    "no": "No.020",
    "name": "레트라",
    "enName": "Raticate",
    "types": [
      "노말"
    ],
    "category": "쥐포켓몬",
    "height": "0.7m",
    "weight": "18.5kg",
    "ability": "도주",
    "hiddenAbility": "의기양양",
    "catchRate": "127",
    "eggGroup": "육상",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 19,
        "method": "기본"
      },
      {
        "id": 20,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "desc": "뒷발의 물갈퀴로 강을 헤엄쳐 건넌다. 콘크리트 벽도 갉아서 무너뜨릴 정도의 이빨을 가졌다.",
    "stats": {
      "hp": 55,
      "atk": 81,
      "def": 60,
      "spa": 50,
      "spd": 70,
      "spe": 97
    }
  },
  {
    "id": 21,
    "no": "No.021",
    "name": "깨비참",
    "enName": "Spearow",
    "types": [
      "노말",
      "비행"
    ],
    "category": "아기새포켓몬",
    "height": "0.3m",
    "weight": "2.0kg",
    "ability": "날카로운눈",
    "hiddenAbility": "스나이퍼",
    "catchRate": "255",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 21,
        "method": "기본"
      },
      {
        "id": 22,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "desc": "날개가 짧아 멀리 날지는 못하지만 풀숲을 바쁘게 뛰어다니며 벌레 포켓몬을 잡아먹는다.",
    "stats": {
      "hp": 40,
      "atk": 60,
      "def": 30,
      "spa": 31,
      "spd": 31,
      "spe": 70
    }
  },
  {
    "id": 22,
    "no": "No.022",
    "name": "깨비드릴조",
    "enName": "Fearow",
    "types": [
      "노말",
      "비행"
    ],
    "category": "부리포켓몬",
    "height": "1.2m",
    "weight": "38.0kg",
    "ability": "날카로운눈",
    "hiddenAbility": "스나이퍼",
    "catchRate": "90",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 21,
        "method": "기본"
      },
      {
        "id": 22,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "desc": "커다란 날개로 하루 종일 하늘을 날 수 있다. 길고 뾰족한 부리로 공격한다.",
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 65,
      "spa": 61,
      "spd": 61,
      "spe": 100
    }
  },
  {
    "id": 23,
    "no": "No.023",
    "name": "아보",
    "enName": "Ekans",
    "types": [
      "독"
    ],
    "category": "뱀포켓몬",
    "height": "2.0m",
    "weight": "6.9kg",
    "ability": "위협",
    "hiddenAbility": "긴장감",
    "catchRate": "255",
    "eggGroup": "육상 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 23,
        "method": "기본"
      },
      {
        "id": 24,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "desc": "풀숲에서 소리 없이 이동하며 구구나 깨비참의 알을 통째로 삼킨다.",
    "stats": {
      "hp": 35,
      "atk": 60,
      "def": 44,
      "spa": 40,
      "spd": 54,
      "spe": 55
    }
  },
  {
    "id": 24,
    "no": "No.024",
    "name": "아보크",
    "enName": "Arbok",
    "types": [
      "독"
    ],
    "category": "코브라포켓몬",
    "height": "3.5m",
    "weight": "65.0kg",
    "ability": "위협",
    "hiddenAbility": "긴장감",
    "catchRate": "90",
    "eggGroup": "육상 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 23,
        "method": "기본"
      },
      {
        "id": 24,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "desc": "배의 무서운 무늬로 상대를 위협해 움직임을 멈추게 한 뒤 몸으로 조여 온다.",
    "stats": {
      "hp": 60,
      "atk": 95,
      "def": 69,
      "spa": 65,
      "spd": 79,
      "spe": 80
    }
  },
  {
    "id": 25,
    "no": "No.025",
    "name": "피카츄",
    "enName": "Pikachu",
    "types": [
      "전기"
    ],
    "category": "쥐포켓몬",
    "height": "0.4m",
    "weight": "6.0kg",
    "ability": "정전기",
    "hiddenAbility": "피뢰침",
    "catchRate": "190",
    "eggGroup": "육상 / 요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 25,
        "method": "기본"
      },
      {
        "id": 26,
        "method": "천둥의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "desc": "양쪽 볼에 작은 전기 주머니가 있다. 위기 상황일 때 방전하여 상대를 마비시킨다.",
    "stats": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 50,
      "spd": 50,
      "spe": 90
    }
  },
  {
    "id": 26,
    "no": "No.026",
    "name": "라이츄",
    "enName": "Raichu",
    "types": [
      "전기"
    ],
    "category": "쥐포켓몬",
    "height": "0.8m",
    "weight": "30.0kg",
    "ability": "정전기",
    "hiddenAbility": "피뢰침",
    "catchRate": "75",
    "eggGroup": "육상 / 요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 25,
        "method": "기본"
      },
      {
        "id": 26,
        "method": "천둥의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "desc": "전기가 가득 차면 양 귀가 수직으로 선다. 10만 볼트의 전격을 발산할 수 있다.",
    "stats": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 110
    }
  },
  {
    "id": 27,
    "no": "No.027",
    "name": "모래두지",
    "enName": "Sandshrew",
    "types": [
      "땅"
    ],
    "category": "쥐포켓몬",
    "height": "0.6m",
    "weight": "12.0kg",
    "ability": "모래숨기",
    "hiddenAbility": "모래헤치기",
    "catchRate": "255",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 27,
        "method": "기본"
      },
      {
        "id": 28,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "desc": "비가 적게 내리는 건조한 땅에 깊은 굴을 파고 산다. 몸을 둥글게 말아 공격을 막는다.",
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 85,
      "spa": 20,
      "spd": 30,
      "spe": 40
    }
  },
  {
    "id": 28,
    "no": "No.028",
    "name": "고지",
    "enName": "Sandslash",
    "types": [
      "땅"
    ],
    "category": "쥐포켓몬",
    "height": "1.0m",
    "weight": "29.5kg",
    "ability": "모래숨기",
    "hiddenAbility": "모래헤치기",
    "catchRate": "90",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 27,
        "method": "기본"
      },
      {
        "id": 28,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "desc": "등의 단단한 바늘로 몸을 감싸며 굴러서 돌진한다. 바늘은 1년에 한 번 새로 돋아난다.",
    "stats": {
      "hp": 75,
      "atk": 100,
      "def": 110,
      "spa": 45,
      "spd": 55,
      "spe": 65
    }
  },
  {
    "id": 29,
    "no": "No.029",
    "name": "니드런♀",
    "enName": "Nidoran♀",
    "types": [
      "독"
    ],
    "category": "독침포켓몬",
    "height": "0.4m",
    "weight": "7.0kg",
    "ability": "독가시",
    "hiddenAbility": "의기양양",
    "catchRate": "235",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 29,
        "method": "기본"
      },
      {
        "id": 30,
        "method": "Lv.16"
      },
      {
        "id": 31,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "desc": "몸집은 작지만 독침을 지니고 있어 주의가 필요하다. 암컷은 뿔이 비교적 작다.",
    "stats": {
      "hp": 55,
      "atk": 47,
      "def": 52,
      "spa": 40,
      "spd": 40,
      "spe": 41
    }
  },
  {
    "id": 30,
    "no": "No.030",
    "name": "니드리나",
    "enName": "Nidorina",
    "types": [
      "독"
    ],
    "category": "독침포켓몬",
    "height": "0.8m",
    "weight": "20.0kg",
    "ability": "독가시",
    "hiddenAbility": "의기양양",
    "catchRate": "120",
    "eggGroup": "미발견",
    "hatchSteps": "5,120보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 29,
        "method": "기본"
      },
      {
        "id": 30,
        "method": "Lv.16"
      },
      {
        "id": 31,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "desc": "온순한 성격으로 싸움을 피하려 하지만 위협을 느끼면 전신의 가시를 곤두세운다.",
    "stats": {
      "hp": 70,
      "atk": 62,
      "def": 67,
      "spa": 55,
      "spd": 55,
      "spe": 56
    }
  },
  {
    "id": 31,
    "no": "No.031",
    "name": "니드퀸",
    "enName": "Nidoqueen",
    "types": [
      "독",
      "땅"
    ],
    "category": "드릴포켓몬",
    "height": "1.3m",
    "weight": "60.0kg",
    "ability": "독가시",
    "hiddenAbility": "우격다짐",
    "catchRate": "45",
    "eggGroup": "미발견",
    "hatchSteps": "5,120보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 29,
        "method": "기본"
      },
      {
        "id": 30,
        "method": "Lv.16"
      },
      {
        "id": 31,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "desc": "단단한 비늘로 덮인 거대한 몸으로 몸통박치기를 날린다. 새끼를 지킬 때 가장 강해진다.",
    "stats": {
      "hp": 90,
      "atk": 92,
      "def": 87,
      "spa": 75,
      "spd": 85,
      "spe": 76
    }
  },
  {
    "id": 32,
    "no": "No.032",
    "name": "니드런♂",
    "enName": "Nidoran♂",
    "types": [
      "독"
    ],
    "category": "독침포켓몬",
    "height": "0.5m",
    "weight": "9.0kg",
    "ability": "독가시",
    "hiddenAbility": "의기양양",
    "catchRate": "235",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 32,
        "method": "기본"
      },
      {
        "id": 33,
        "method": "Lv.16"
      },
      {
        "id": 34,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "desc": "커다란 귀를 세워 주변의 기척을 살핀다. 이마의 뿔에는 강력한 독이 들어 있다.",
    "stats": {
      "hp": 46,
      "atk": 57,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 50
    }
  },
  {
    "id": 33,
    "no": "No.033",
    "name": "니드리노",
    "enName": "Nidorino",
    "types": [
      "독"
    ],
    "category": "독침포켓몬",
    "height": "0.9m",
    "weight": "19.5kg",
    "ability": "독가시",
    "hiddenAbility": "의기양양",
    "catchRate": "120",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 32,
        "method": "기본"
      },
      {
        "id": 33,
        "method": "Lv.16"
      },
      {
        "id": 34,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "desc": "다이아몬드보다 단단한 뿔을 가졌다. 적을 발견하면 바로 뿔을 들이대며 돌진한다.",
    "stats": {
      "hp": 61,
      "atk": 72,
      "def": 57,
      "spa": 55,
      "spd": 55,
      "spe": 65
    }
  },
  {
    "id": 34,
    "no": "No.034",
    "name": "니드킹",
    "enName": "Nidoking",
    "types": [
      "독",
      "땅"
    ],
    "category": "드릴포켓몬",
    "height": "1.4m",
    "weight": "62.0kg",
    "ability": "독가시",
    "hiddenAbility": "우격다짐",
    "catchRate": "45",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 32,
        "method": "기본"
      },
      {
        "id": 33,
        "method": "Lv.16"
      },
      {
        "id": 34,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "desc": "강철 같은 피부와 거대한 꼬리를 휘두르며 전신으로 파괴적인 공격을 펼친다.",
    "stats": {
      "hp": 81,
      "atk": 102,
      "def": 77,
      "spa": 85,
      "spd": 75,
      "spe": 85
    }
  },
  {
    "id": 35,
    "no": "No.035",
    "name": "삐삐",
    "enName": "Clefairy",
    "types": [
      "노말"
    ],
    "category": "요정포켓몬",
    "height": "0.6m",
    "weight": "7.5kg",
    "ability": "헤롱헤롱바디",
    "hiddenAbility": "프렌드가드",
    "catchRate": "150",
    "eggGroup": "요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 35,
        "method": "기본"
      },
      {
        "id": 36,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "desc": "보름달이 뜨는 밤에 동료들과 모여 춤을 춘다. 날개에 달빛을 모으면 하늘에 뜰 수 있다.",
    "stats": {
      "hp": 70,
      "atk": 45,
      "def": 48,
      "spa": 60,
      "spd": 65,
      "spe": 35
    }
  },
  {
    "id": 36,
    "no": "No.036",
    "name": "픽시",
    "enName": "Clefable",
    "types": [
      "노말"
    ],
    "category": "요정포켓몬",
    "height": "1.3m",
    "weight": "40.0kg",
    "ability": "헤롱헤롱바디",
    "hiddenAbility": "천진",
    "catchRate": "25",
    "eggGroup": "요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 35,
        "method": "기본"
      },
      {
        "id": 36,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "desc": "귀가 매우 좋아 1km 떨어진 곳에서 바늘 떨어지는 소리도 들을 수 있다.",
    "stats": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 95,
      "spd": 90,
      "spe": 60
    }
  },
  {
    "id": 37,
    "no": "No.037",
    "name": "식스테일",
    "enName": "Vulpix",
    "types": [
      "불꽃"
    ],
    "category": "여우포켓몬",
    "height": "0.6m",
    "weight": "9.9kg",
    "ability": "타오르는불꽃",
    "hiddenAbility": "가뭄",
    "catchRate": "190",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 37,
        "method": "기본"
      },
      {
        "id": 38,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "desc": "태어날 때는 하얀 꼬리가 하나뿐이지만 자라면서 6갈래로 갈라져 아름다워진다.",
    "stats": {
      "hp": 38,
      "atk": 41,
      "def": 40,
      "spa": 50,
      "spd": 65,
      "spe": 65
    }
  },
  {
    "id": 38,
    "no": "No.038",
    "name": "나인테일",
    "enName": "Ninetales",
    "types": [
      "불꽃"
    ],
    "category": "여우포켓몬",
    "height": "1.1m",
    "weight": "19.9kg",
    "ability": "타오르는불꽃",
    "hiddenAbility": "가뭄",
    "catchRate": "75",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 37,
        "method": "기본"
      },
      {
        "id": 38,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "desc": "황금빛 털과 9개의 꼬리를 지닌 영리한 포켓몬. 1000년을 산다고 전해진다.",
    "stats": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    }
  },
  {
    "id": 39,
    "no": "No.039",
    "name": "푸린",
    "enName": "Jigglypuff",
    "types": [
      "노말"
    ],
    "category": "풍선포켓몬",
    "height": "0.5m",
    "weight": "5.5kg",
    "ability": "헤롱헤롱바디",
    "hiddenAbility": "프렌드가드",
    "catchRate": "170",
    "eggGroup": "요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 39,
        "method": "기본"
      },
      {
        "id": 40,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "desc": "둥글고 큰 눈동자가 흔들릴 때 기분 좋은 자장가를 불러 상대를 깊은 잠에 빠뜨린다.",
    "stats": {
      "hp": 115,
      "atk": 45,
      "def": 20,
      "spa": 45,
      "spd": 25,
      "spe": 20
    }
  },
  {
    "id": 40,
    "no": "No.040",
    "name": "푸크린",
    "enName": "Wigglytuff",
    "types": [
      "노말"
    ],
    "category": "풍선포켓몬",
    "height": "1.0m",
    "weight": "12.0kg",
    "ability": "헤롱헤롱바디",
    "hiddenAbility": "통찰",
    "catchRate": "50",
    "eggGroup": "요정",
    "hatchSteps": "2,560보",
    "genderRatio": "♂ 25% : ♀ 75%",
    "evolutions": [
      {
        "id": 39,
        "method": "기본"
      },
      {
        "id": 40,
        "method": "달의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "desc": "숨을 깊이 들이마시면 몸이 풍선처럼 크게 부풀어 오른다. 털결이 매우 부드럽다.",
    "stats": {
      "hp": 140,
      "atk": 70,
      "def": 45,
      "spa": 85,
      "spd": 50,
      "spe": 45
    }
  },
  {
    "id": 41,
    "no": "No.041",
    "name": "주뱃",
    "enName": "Zubat",
    "types": [
      "독",
      "비행"
    ],
    "category": "박쥐포켓몬",
    "height": "0.8m",
    "weight": "7.5kg",
    "ability": "정신력",
    "hiddenAbility": "틈새포착",
    "catchRate": "255",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 41,
        "method": "기본"
      },
      {
        "id": 42,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "desc": "어두운 동굴에 살며 입에서 초음파를 발사해 주변 장애물과 먹이의 위치를 파악한다.",
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 30,
      "spd": 40,
      "spe": 55
    }
  },
  {
    "id": 42,
    "no": "No.042",
    "name": "골뱃",
    "enName": "Golbat",
    "types": [
      "독",
      "비행"
    ],
    "category": "박쥐포켓몬",
    "height": "1.6m",
    "weight": "55.0kg",
    "ability": "정신력",
    "hiddenAbility": "틈새포착",
    "catchRate": "90",
    "eggGroup": "비행",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 41,
        "method": "기본"
      },
      {
        "id": 42,
        "method": "Lv.22"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "desc": "날카로운 송곳니로 단단한 피부도 뚫고 에너지를 흡수한다. 어둠 속에서 소리 없이 날아다닌다.",
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 70,
      "spa": 65,
      "spd": 75,
      "spe": 90
    }
  },
  {
    "id": 43,
    "no": "No.043",
    "name": "뚜벅쵸",
    "enName": "Oddish",
    "types": [
      "풀",
      "독"
    ],
    "category": "잡초포켓몬",
    "height": "0.5m",
    "weight": "5.4kg",
    "ability": "엽록소",
    "hiddenAbility": "도주",
    "catchRate": "255",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 43,
        "method": "기본"
      },
      {
        "id": 44,
        "method": "Lv.21"
      },
      {
        "id": 45,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "desc": "낮에는 얼굴만 내놓고 땅속에 파묻혀 지낸다. 밤이 되면 걸어 다니며 씨앗을 뿌린다.",
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 55,
      "spa": 75,
      "spd": 65,
      "spe": 30
    }
  },
  {
    "id": 44,
    "no": "No.044",
    "name": "냄새꼬",
    "enName": "Gloom",
    "types": [
      "풀",
      "독"
    ],
    "category": "잡초포켓몬",
    "height": "0.8m",
    "weight": "8.6kg",
    "ability": "엽록소",
    "hiddenAbility": "악취",
    "catchRate": "120",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 43,
        "method": "기본"
      },
      {
        "id": 44,
        "method": "Lv.21"
      },
      {
        "id": 45,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "desc": "입에서 흘러나오는 꿀처럼 보이는 액체는 2km 밖에서도 맡을 수 있을 정도로 지독한 냄새가 난다.",
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    }
  },
  {
    "id": 45,
    "no": "No.045",
    "name": "라플레시아",
    "enName": "Vileplume",
    "types": [
      "풀",
      "독"
    ],
    "category": "꽃포켓몬",
    "height": "1.2m",
    "weight": "18.6kg",
    "ability": "엽록소",
    "hiddenAbility": "포자",
    "catchRate": "45",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 43,
        "method": "기본"
      },
      {
        "id": 44,
        "method": "Lv.21"
      },
      {
        "id": 45,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "desc": "세계에서 가장 큰 꽃잎을 가졌다. 걸을 때마다 커다란 꽃잎이 흔들리며 독가루를 흩뿌린다.",
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 110,
      "spd": 90,
      "spe": 50
    }
  },
  {
    "id": 46,
    "no": "No.046",
    "name": "파라스",
    "enName": "Paras",
    "types": [
      "벌레",
      "풀"
    ],
    "category": "버섯포켓몬",
    "height": "0.3m",
    "weight": "5.4kg",
    "ability": "포자",
    "hiddenAbility": "습기",
    "catchRate": "190",
    "eggGroup": "벌레 / 식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 46,
        "method": "기본"
      },
      {
        "id": 47,
        "method": "Lv.24"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "desc": "등에 동충하초라는 버섯이 자라고 있다. 벌레가 영양을 섭취할수록 버섯도 함께 커진다.",
    "stats": {
      "hp": 35,
      "atk": 70,
      "def": 55,
      "spa": 45,
      "spd": 55,
      "spe": 25
    }
  },
  {
    "id": 47,
    "no": "No.047",
    "name": "파라섹트",
    "enName": "Parasect",
    "types": [
      "벌레",
      "풀"
    ],
    "category": "버섯포켓몬",
    "height": "1.0m",
    "weight": "29.5kg",
    "ability": "포자",
    "hiddenAbility": "습기",
    "catchRate": "75",
    "eggGroup": "벌레 / 식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 46,
        "method": "기본"
      },
      {
        "id": 47,
        "method": "Lv.24"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "desc": "몸보다 커진 버섯이 본체를 조종한다. 어둡고 습한 장소를 좋아하며 독 포자를 뿌린다.",
    "stats": {
      "hp": 60,
      "atk": 95,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 30
    }
  },
  {
    "id": 48,
    "no": "No.048",
    "name": "콘팡",
    "enName": "Venonat",
    "types": [
      "벌레",
      "독"
    ],
    "category": "곤충포켓몬",
    "height": "1.0m",
    "weight": "30.0kg",
    "ability": "복안",
    "hiddenAbility": "도주",
    "catchRate": "190",
    "eggGroup": "벌레",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 48,
        "method": "기본"
      },
      {
        "id": 49,
        "method": "Lv.31"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "desc": "커다란 눈은 레이더 역할을 하여 어둠 속에서도 작은 먹이를 놓치지 않고 찾아낸다.",
    "stats": {
      "hp": 60,
      "atk": 55,
      "def": 50,
      "spa": 40,
      "spd": 55,
      "spe": 45
    }
  },
  {
    "id": 49,
    "no": "No.049",
    "name": "도나리",
    "enName": "Venomoth",
    "types": [
      "벌레",
      "독"
    ],
    "category": "독나방포켓몬",
    "height": "1.5m",
    "weight": "12.5kg",
    "ability": "인분",
    "hiddenAbility": "미라클스킨",
    "catchRate": "75",
    "eggGroup": "벌레",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 48,
        "method": "기본"
      },
      {
        "id": 49,
        "method": "Lv.31"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "desc": "날개에 묻은 인분은 색깔에 따라 독이 있거나 마비를 일으키는 등 다양한 효과를 지닌다.",
    "stats": {
      "hp": 70,
      "atk": 65,
      "def": 60,
      "spa": 90,
      "spd": 75,
      "spe": 90
    }
  },
  {
    "id": 50,
    "no": "No.050",
    "name": "디그다",
    "enName": "Diglett",
    "types": [
      "땅"
    ],
    "category": "두더지포켓몬",
    "height": "0.2m",
    "weight": "0.8kg",
    "ability": "모래숨기",
    "hiddenAbility": "모래의힘",
    "catchRate": "255",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 50,
        "method": "기본"
      },
      {
        "id": 51,
        "method": "Lv.26"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "desc": "땅속 1m 정도를 파고들며 나무뿌리를 갉아먹고 산다. 가끔 땅 위로 얼굴을 내민다.",
    "stats": {
      "hp": 10,
      "atk": 55,
      "def": 25,
      "spa": 35,
      "spd": 45,
      "spe": 95
    }
  },
  {
    "id": 51,
    "no": "No.051",
    "name": "닥트리오",
    "enName": "Dugtrio",
    "types": [
      "땅"
    ],
    "category": "두더지포켓몬",
    "height": "0.7m",
    "weight": "33.3kg",
    "ability": "모래숨기",
    "hiddenAbility": "모래의힘",
    "catchRate": "50",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 50,
        "method": "기본"
      },
      {
        "id": 51,
        "method": "Lv.26"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "desc": "세 쌍둥이 디그다가 합쳐진 모습이다. 지하 100km 깊이까지 땅을 파고들 수 있다.",
    "stats": {
      "hp": 35,
      "atk": 100,
      "def": 50,
      "spa": 50,
      "spd": 70,
      "spe": 120
    }
  },
  {
    "id": 52,
    "no": "No.052",
    "name": "나옹",
    "enName": "Meowth",
    "types": [
      "노말"
    ],
    "category": "요괴고양이포켓몬",
    "height": "0.4m",
    "weight": "4.2kg",
    "ability": "픽업",
    "hiddenAbility": "긴장감",
    "catchRate": "255",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 52,
        "method": "기본"
      },
      {
        "id": 53,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "desc": "밤이 되면 눈이 반짝인다. 동전처럼 반짝반짝 빛나는 물건을 매우 좋아해 모으는 습성이 있다.",
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 40,
      "spd": 40,
      "spe": 90
    }
  },
  {
    "id": 53,
    "no": "No.053",
    "name": "페르시온",
    "enName": "Persian",
    "types": [
      "노말"
    ],
    "category": "샴고양이포켓몬",
    "height": "1.0m",
    "weight": "32.0kg",
    "ability": "유연",
    "hiddenAbility": "긴장감",
    "catchRate": "90",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 52,
        "method": "기본"
      },
      {
        "id": 53,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "desc": "우아한 걸음걸이를 지녔지만 기분이 나빠지면 바로 발톱을 세워 덤벼드는 거친 면도 있다.",
    "stats": {
      "hp": 65,
      "atk": 70,
      "def": 60,
      "spa": 65,
      "spd": 65,
      "spe": 115
    }
  },
  {
    "id": 54,
    "no": "No.054",
    "name": "고라파덕",
    "enName": "Psyduck",
    "types": [
      "물"
    ],
    "category": "오리포켓몬",
    "height": "0.8m",
    "weight": "19.6kg",
    "ability": "습기",
    "hiddenAbility": "쓱쓱",
    "catchRate": "190",
    "eggGroup": "수중1 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 54,
        "method": "기본"
      },
      {
        "id": 55,
        "method": "Lv.33"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "desc": "항상 두통에 시달리고 있다. 이 두통이 심해지면 이상한 염동력을 쓰기 시작한다.",
    "stats": {
      "hp": 50,
      "atk": 52,
      "def": 48,
      "spa": 65,
      "spd": 50,
      "spe": 55
    }
  },
  {
    "id": 55,
    "no": "No.055",
    "name": "골덕",
    "enName": "Golduck",
    "types": [
      "물"
    ],
    "category": "오리포켓몬",
    "height": "1.7m",
    "weight": "76.6kg",
    "ability": "습기",
    "hiddenAbility": "쓱쓱",
    "catchRate": "75",
    "eggGroup": "수중1 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 54,
        "method": "기본"
      },
      {
        "id": 55,
        "method": "Lv.33"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "desc": "손발의 물갈퀴가 발달해 프로 수영선수보다 빠르게 헤엄친다. 이마의 구슬이 빛날 때 신통력을 쓴다.",
    "stats": {
      "hp": 80,
      "atk": 82,
      "def": 78,
      "spa": 95,
      "spd": 80,
      "spe": 85
    }
  },
  {
    "id": 56,
    "no": "No.056",
    "name": "망키",
    "enName": "Mankey",
    "types": [
      "격투"
    ],
    "category": "돈숭이포켓몬",
    "height": "0.5m",
    "weight": "28.0kg",
    "ability": "의기양양",
    "hiddenAbility": "오기",
    "catchRate": "190",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 56,
        "method": "기본"
      },
      {
        "id": 57,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "desc": "화내기 시작하면 주위를 분간하지 못하고 날뛴다. 나무 위에서 무리를 지어 생활한다.",
    "stats": {
      "hp": 40,
      "atk": 80,
      "def": 35,
      "spa": 35,
      "spd": 45,
      "spe": 70
    }
  },
  {
    "id": 57,
    "no": "No.057",
    "name": "성원숭",
    "enName": "Primeape",
    "types": [
      "격투"
    ],
    "category": "돈숭이포켓몬",
    "height": "1.0m",
    "weight": "32.0kg",
    "ability": "의기양양",
    "hiddenAbility": "오기",
    "catchRate": "75",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 56,
        "method": "기본"
      },
      {
        "id": 57,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "desc": "누군가와 눈이 마주치기만 해도 화를 내며 끝까지 쫓아간다. 잠들었을 때만 온순해진다.",
    "stats": {
      "hp": 65,
      "atk": 105,
      "def": 60,
      "spa": 60,
      "spd": 70,
      "spe": 95
    }
  },
  {
    "id": 58,
    "no": "No.058",
    "name": "가디",
    "enName": "Growlithe",
    "types": [
      "불꽃"
    ],
    "category": "강아지포켓몬",
    "height": "0.7m",
    "weight": "19.0kg",
    "ability": "위협",
    "hiddenAbility": "정의의마음",
    "catchRate": "190",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 58,
        "method": "기본"
      },
      {
        "id": 59,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "desc": "사람을 잘 따르고 충성심이 강하다. 영역에 침입한 적에게는 맹렬히 짖으며 쫓아낸다.",
    "stats": {
      "hp": 55,
      "atk": 70,
      "def": 45,
      "spa": 70,
      "spd": 50,
      "spe": 60
    }
  },
  {
    "id": 59,
    "no": "No.059",
    "name": "윈디",
    "enName": "Arcanine",
    "types": [
      "불꽃"
    ],
    "category": "전설포켓몬",
    "height": "1.9m",
    "weight": "155.0kg",
    "ability": "위협",
    "hiddenAbility": "정의의마음",
    "catchRate": "75",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 58,
        "method": "기본"
      },
      {
        "id": 59,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "desc": "예로부터 많은 사람을 매료시킨 아름다운 포켓몬. 초원을 날듯이 가볍게 달린다.",
    "stats": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    }
  },
  {
    "id": 60,
    "no": "No.060",
    "name": "발챙이",
    "enName": "Poliwag",
    "types": [
      "물"
    ],
    "category": "올챙이포켓몬",
    "height": "0.6m",
    "weight": "12.4kg",
    "ability": "저수",
    "hiddenAbility": "쓱쓱",
    "catchRate": "255",
    "eggGroup": "수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 60,
        "method": "기본"
      },
      {
        "id": 61,
        "method": "Lv.25"
      },
      {
        "id": 62,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "desc": "배의 소용돌이 무늬는 내장이 비쳐 보이는 것이다. 걷기보다 헤엄치는 것이 훨씬 빠르다.",
    "stats": {
      "hp": 40,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 90
    }
  },
  {
    "id": 61,
    "no": "No.061",
    "name": "슈륙챙이",
    "enName": "Poliwhirl",
    "types": [
      "물"
    ],
    "category": "올챙이포켓몬",
    "height": "1.0m",
    "weight": "20.0kg",
    "ability": "저수",
    "hiddenAbility": "쓱쓱",
    "catchRate": "120",
    "eggGroup": "수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 60,
        "method": "기본"
      },
      {
        "id": 61,
        "method": "Lv.25"
      },
      {
        "id": 62,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "desc": "다리가 발달해 땅 위에서도 자유롭게 걸을 수 있게 되었다. 피부는 항상 촉촉하게 젖어 있다.",
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 65,
      "spa": 50,
      "spd": 50,
      "spe": 90
    }
  },
  {
    "id": 62,
    "no": "No.062",
    "name": "강챙이",
    "enName": "Poliwrath",
    "types": [
      "물",
      "격투"
    ],
    "category": "올챙이포켓몬",
    "height": "1.3m",
    "weight": "54.0kg",
    "ability": "저수",
    "hiddenAbility": "쓱쓱",
    "catchRate": "45",
    "eggGroup": "수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 60,
        "method": "기본"
      },
      {
        "id": 61,
        "method": "Lv.25"
      },
      {
        "id": 62,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "desc": "단련된 근육으로 태평양도 횡단할 수 있는 수영 실력을 가졌다. 펀치로 바위도 부순다.",
    "stats": {
      "hp": 90,
      "atk": 95,
      "def": 95,
      "spa": 70,
      "spd": 90,
      "spe": 70
    }
  },
  {
    "id": 63,
    "no": "No.063",
    "name": "캐이시",
    "enName": "Abra",
    "types": [
      "에스퍼"
    ],
    "category": "초능력포켓몬",
    "height": "0.9m",
    "weight": "19.5kg",
    "ability": "싱크로",
    "hiddenAbility": "매직가드",
    "catchRate": "200",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 63,
        "method": "기본"
      },
      {
        "id": 64,
        "method": "Lv.16"
      },
      {
        "id": 65,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "desc": "하루에 18시간을 자면서 보낸다. 잠든 상태에서도 순간이동으로 위험에서 벗어난다.",
    "stats": {
      "hp": 25,
      "atk": 20,
      "def": 15,
      "spa": 105,
      "spd": 55,
      "spe": 90
    }
  },
  {
    "id": 64,
    "no": "No.064",
    "name": "윤겔라",
    "enName": "Kadabra",
    "types": [
      "에스퍼"
    ],
    "category": "초능력포켓몬",
    "height": "1.3m",
    "weight": "56.5kg",
    "ability": "싱크로",
    "hiddenAbility": "매직가드",
    "catchRate": "100",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 63,
        "method": "기본"
      },
      {
        "id": 64,
        "method": "Lv.16"
      },
      {
        "id": 65,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "desc": "손에 든 은숟가락이 초능력을 증폭시킨다. 강한 알파파를 방출하여 기계를 오작동시키기도 한다.",
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 120,
      "spd": 70,
      "spe": 105
    }
  },
  {
    "id": 65,
    "no": "No.065",
    "name": "후딘",
    "enName": "Alakazam",
    "types": [
      "에스퍼"
    ],
    "category": "초능력포켓몬",
    "height": "1.5m",
    "weight": "48.0kg",
    "ability": "싱크로",
    "hiddenAbility": "매직가드",
    "catchRate": "50",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 63,
        "method": "기본"
      },
      {
        "id": 64,
        "method": "Lv.16"
      },
      {
        "id": 65,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "desc": "IQ가 5000을 넘으며 슈퍼컴퓨터보다 빠르게 계산한다. 양손의 숟가락으로 강력한 염력을 다룬다.",
    "stats": {
      "hp": 55,
      "atk": 50,
      "def": 45,
      "spa": 135,
      "spd": 95,
      "spe": 120
    }
  },
  {
    "id": 66,
    "no": "No.066",
    "name": "알통몬",
    "enName": "Machop",
    "types": [
      "격투"
    ],
    "category": "괴력포켓몬",
    "height": "0.8m",
    "weight": "19.5kg",
    "ability": "근성",
    "hiddenAbility": "불굴의마음",
    "catchRate": "180",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 66,
        "method": "기본"
      },
      {
        "id": 67,
        "method": "Lv.28"
      },
      {
        "id": 68,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "desc": "작은 체구에도 어른 100명을 던져버릴 만큼 힘이 세다. 매일 근육 단련을 게을리하지 않는다.",
    "stats": {
      "hp": 70,
      "atk": 80,
      "def": 50,
      "spa": 35,
      "spd": 35,
      "spe": 35
    }
  },
  {
    "id": 67,
    "no": "No.067",
    "name": "근육몬",
    "enName": "Machoke",
    "types": [
      "격투"
    ],
    "category": "괴력포켓몬",
    "height": "1.5m",
    "weight": "70.5kg",
    "ability": "근성",
    "hiddenAbility": "불굴의마음",
    "catchRate": "90",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 66,
        "method": "기본"
      },
      {
        "id": 67,
        "method": "Lv.28"
      },
      {
        "id": 68,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "desc": "강인한 근육을 조절하기 위해 허리에 파워 세이브 벨트를 차고 다닌다.",
    "stats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 45
    }
  },
  {
    "id": 68,
    "no": "No.068",
    "name": "괴력몬",
    "enName": "Machamp",
    "types": [
      "격투"
    ],
    "category": "괴력포켓몬",
    "height": "1.6m",
    "weight": "130.0kg",
    "ability": "근성",
    "hiddenAbility": "불굴의마음",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 66,
        "method": "기본"
      },
      {
        "id": 67,
        "method": "Lv.28"
      },
      {
        "id": 68,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "desc": "4개의 팔로 2초 동안 1000발의 펀치를 날린다. 모든 격투기를 마스터한 포켓몬이다.",
    "stats": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    }
  },
  {
    "id": 69,
    "no": "No.069",
    "name": "모다피",
    "enName": "Bellsprout",
    "types": [
      "풀",
      "독"
    ],
    "category": "꽃포켓몬",
    "height": "0.7m",
    "weight": "4.0kg",
    "ability": "엽록소",
    "hiddenAbility": "먹보",
    "catchRate": "255",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 69,
        "method": "기본"
      },
      {
        "id": 70,
        "method": "Lv.21"
      },
      {
        "id": 71,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "desc": "날씬한 몸으로 공격을 피하고 뿌리를 땅에 내려 수분을 보충한다. 입에서 산성 액체를 뿜는다.",
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 35,
      "spa": 70,
      "spd": 30,
      "spe": 40
    }
  },
  {
    "id": 70,
    "no": "No.070",
    "name": "우츠동",
    "enName": "Weepinbell",
    "types": [
      "풀",
      "독"
    ],
    "category": "파리잡이포켓몬",
    "height": "1.0m",
    "weight": "6.4kg",
    "ability": "엽록소",
    "hiddenAbility": "먹보",
    "catchRate": "120",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 69,
        "method": "기본"
      },
      {
        "id": 70,
        "method": "Lv.21"
      },
      {
        "id": 71,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "desc": "나뭇가지에 매달려 먹이를 기다린다. 입 안의 용해액은 무엇이든 녹여버린다.",
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 50,
      "spa": 85,
      "spd": 45,
      "spe": 55
    }
  },
  {
    "id": 71,
    "no": "No.071",
    "name": "우츠보트",
    "enName": "Victreebel",
    "types": [
      "풀",
      "독"
    ],
    "category": "파리잡이포켓몬",
    "height": "1.7m",
    "weight": "15.5kg",
    "ability": "엽록소",
    "hiddenAbility": "먹보",
    "catchRate": "45",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 69,
        "method": "기본"
      },
      {
        "id": 70,
        "method": "Lv.21"
      },
      {
        "id": 71,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "desc": "꿀 같은 향기로 먹이를 유인한 뒤 커다란 입으로 통째로 삼켜버린다.",
    "stats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 100,
      "spd": 70,
      "spe": 70
    }
  },
  {
    "id": 72,
    "no": "No.072",
    "name": "왕눈해",
    "enName": "Tentacool",
    "types": [
      "물",
      "독"
    ],
    "category": "해파리포켓몬",
    "height": "0.9m",
    "weight": "45.5kg",
    "ability": "클리어바디",
    "hiddenAbility": "젖은접시",
    "catchRate": "190",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 72,
        "method": "기본"
      },
      {
        "id": 73,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "desc": "몸의 99%가 수분으로 이루어져 있다. 수정 같은 눈에서 이상한 광선을 발사한다.",
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 35,
      "spa": 50,
      "spd": 100,
      "spe": 70
    }
  },
  {
    "id": 73,
    "no": "No.073",
    "name": "독파리",
    "enName": "Tentacruel",
    "types": [
      "물",
      "독"
    ],
    "category": "해파리포켓몬",
    "height": "1.6m",
    "weight": "55.0kg",
    "ability": "클리어바디",
    "hiddenAbility": "젖은접시",
    "catchRate": "60",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 72,
        "method": "기본"
      },
      {
        "id": 73,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "desc": "80개의 촉수를 자유자재로 늘려 상대를 휘감고 독을 주입한다. 머리의 붉은 구슬이 빛난다.",
    "stats": {
      "hp": 80,
      "atk": 70,
      "def": 65,
      "spa": 80,
      "spd": 120,
      "spe": 100
    }
  },
  {
    "id": 74,
    "no": "No.074",
    "name": "꼬마돌",
    "enName": "Geodude",
    "types": [
      "바위",
      "땅"
    ],
    "category": "암석포켓몬",
    "height": "0.4m",
    "weight": "20.0kg",
    "ability": "돌머리",
    "hiddenAbility": "모래숨기",
    "catchRate": "255",
    "eggGroup": "광물",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 74,
        "method": "기본"
      },
      {
        "id": 75,
        "method": "Lv.25"
      },
      {
        "id": 76,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "desc": "산길에 많이 굴러다니고 있다. 돌멩이와 닮아서 모르고 밟으면 화를 내며 날뛴다.",
    "stats": {
      "hp": 40,
      "atk": 80,
      "def": 100,
      "spa": 30,
      "spd": 30,
      "spe": 20
    }
  },
  {
    "id": 75,
    "no": "No.075",
    "name": "데구리",
    "enName": "Graveler",
    "types": [
      "바위",
      "땅"
    ],
    "category": "암석포켓몬",
    "height": "1.0m",
    "weight": "105.0kg",
    "ability": "돌머리",
    "hiddenAbility": "모래숨기",
    "catchRate": "120",
    "eggGroup": "광물",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 74,
        "method": "기본"
      },
      {
        "id": 75,
        "method": "Lv.25"
      },
      {
        "id": 76,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "desc": "비탈길을 굴러서 이동한다. 앞을 가로막는 장애물은 거침없이 부수며 나아간다.",
    "stats": {
      "hp": 55,
      "atk": 95,
      "def": 115,
      "spa": 45,
      "spd": 45,
      "spe": 35
    }
  },
  {
    "id": 76,
    "no": "No.076",
    "name": "딱구리",
    "enName": "Golem",
    "types": [
      "바위",
      "땅"
    ],
    "category": "메가톤포켓몬",
    "height": "1.4m",
    "weight": "300.0kg",
    "ability": "돌머리",
    "hiddenAbility": "모래숨기",
    "catchRate": "45",
    "eggGroup": "광물",
    "hatchSteps": "3,840보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 74,
        "method": "기본"
      },
      {
        "id": 75,
        "method": "Lv.25"
      },
      {
        "id": 76,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "desc": "다이너마이트가 터져도 끄떡없는 단단한 껍질을 가졌다. 산 정상에서 굴러떨어지며 이동한다.",
    "stats": {
      "hp": 80,
      "atk": 120,
      "def": 130,
      "spa": 55,
      "spd": 65,
      "spe": 45
    }
  },
  {
    "id": 77,
    "no": "No.077",
    "name": "포니타",
    "enName": "Ponyta",
    "types": [
      "불꽃"
    ],
    "category": "불의말포켓몬",
    "height": "1.0m",
    "weight": "30.0kg",
    "ability": "도주",
    "hiddenAbility": "불꽃몸",
    "catchRate": "190",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 77,
        "method": "기본"
      },
      {
        "id": 78,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "desc": "태어난 지 1시간 만에 멋진 갈기가 자란다. 도쿄 타워도 뛰어넘을 만큼 점프력이 뛰어나다.",
    "stats": {
      "hp": 50,
      "atk": 85,
      "def": 55,
      "spa": 65,
      "spd": 65,
      "spe": 90
    }
  },
  {
    "id": 78,
    "no": "No.078",
    "name": "날쌩마",
    "enName": "Rapidash",
    "types": [
      "불꽃"
    ],
    "category": "불의말포켓몬",
    "height": "1.7m",
    "weight": "95.0kg",
    "ability": "도주",
    "hiddenAbility": "불꽃몸",
    "catchRate": "60",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 77,
        "method": "기본"
      },
      {
        "id": 78,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "desc": "불타는 갈기를 휘날리며 시속 240km로 달린다. 달리는 속도가 빨라질수록 갈기의 불꽃도 거세진다.",
    "stats": {
      "hp": 65,
      "atk": 100,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 105
    }
  },
  {
    "id": 79,
    "no": "No.079",
    "name": "야돈",
    "enName": "Slowpoke",
    "types": [
      "물",
      "에스퍼"
    ],
    "category": "얼간이포켓몬",
    "height": "1.2m",
    "weight": "36.0kg",
    "ability": "둔감",
    "hiddenAbility": "재생력",
    "catchRate": "190",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 79,
        "method": "기본"
      },
      {
        "id": 80,
        "method": "Lv.37"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "desc": "움직임이 매우 느리고 멍하다. 꼬리를 물에 담그고 낚시를 하다가 하루가 지나도 눈치채지 못한다.",
    "stats": {
      "hp": 90,
      "atk": 65,
      "def": 65,
      "spa": 40,
      "spd": 40,
      "spe": 15
    }
  },
  {
    "id": 80,
    "no": "No.080",
    "name": "야도란",
    "enName": "Slowbro",
    "types": [
      "물",
      "에스퍼"
    ],
    "category": "기생포켓몬",
    "height": "1.6m",
    "weight": "78.5kg",
    "ability": "둔감",
    "hiddenAbility": "재생력",
    "catchRate": "75",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 79,
        "method": "기본"
      },
      {
        "id": 80,
        "method": "Lv.37"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "desc": "꼬리에 셀러가 달라붙어 진화했다. 꼬리의 셀러가 떨어지면 원래의 야돈으로 돌아간다.",
    "stats": {
      "hp": 95,
      "atk": 75,
      "def": 110,
      "spa": 100,
      "spd": 80,
      "spe": 30
    }
  },
  {
    "id": 81,
    "no": "No.081",
    "name": "코일",
    "enName": "Magnemite",
    "types": [
      "전기"
    ],
    "category": "자석포켓몬",
    "height": "0.3m",
    "weight": "6.0kg",
    "ability": "자력",
    "hiddenAbility": "애널라이즈",
    "catchRate": "190",
    "eggGroup": "광물",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 81,
        "method": "기본"
      },
      {
        "id": 82,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "desc": "양옆의 자석에서 반중력을 발생시켜 공중에 떠 있다. 전기를 먹고 산다.",
    "stats": {
      "hp": 25,
      "atk": 35,
      "def": 70,
      "spa": 95,
      "spd": 55,
      "spe": 45
    }
  },
  {
    "id": 82,
    "no": "No.082",
    "name": "레어코일",
    "enName": "Magneton",
    "types": [
      "전기"
    ],
    "category": "자석포켓몬",
    "height": "1.0m",
    "weight": "60.0kg",
    "ability": "자력",
    "hiddenAbility": "애널라이즈",
    "catchRate": "60",
    "eggGroup": "광물",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 81,
        "method": "기본"
      },
      {
        "id": 82,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "desc": "3마리의 코일이 강한 자력으로 연결되어 있다. 주변 기온을 2도 정도 올릴 만큼 열을 낸다.",
    "stats": {
      "hp": 50,
      "atk": 60,
      "def": 95,
      "spa": 120,
      "spd": 70,
      "spe": 70
    }
  },
  {
    "id": 83,
    "no": "No.083",
    "name": "파오리",
    "enName": "Farfetch'd",
    "types": [
      "노말",
      "비행"
    ],
    "category": "청둥오리포켓몬",
    "height": "0.8m",
    "weight": "15.0kg",
    "ability": "날카로운눈",
    "hiddenAbility": "오기",
    "catchRate": "45",
    "eggGroup": "비행 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 83,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "desc": "항상 파 줄기를 들고 다닌다. 이 파는 무기가 되기도 하고 둥지를 만드는 재료가 되기도 한다.",
    "stats": {
      "hp": 52,
      "atk": 90,
      "def": 55,
      "spa": 58,
      "spd": 62,
      "spe": 60
    }
  },
  {
    "id": 84,
    "no": "No.084",
    "name": "두두",
    "enName": "Doduo",
    "types": [
      "노말",
      "비행"
    ],
    "category": "쌍둥이새포켓몬",
    "height": "1.4m",
    "weight": "39.2kg",
    "ability": "도주",
    "hiddenAbility": "복안",
    "catchRate": "190",
    "eggGroup": "비행",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 84,
        "method": "기본"
      },
      {
        "id": 85,
        "method": "Lv.31"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "desc": "두 개의 머리가 번갈아 가며 자고 깨어 있기 때문에 항상 경계를 늦추지 않는다.",
    "stats": {
      "hp": 35,
      "atk": 85,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 75
    }
  },
  {
    "id": 85,
    "no": "No.085",
    "name": "두트리오",
    "enName": "Dodrio",
    "types": [
      "노말",
      "비행"
    ],
    "category": "세쌍둥이새포켓몬",
    "height": "1.8m",
    "weight": "85.2kg",
    "ability": "도주",
    "hiddenAbility": "복안",
    "catchRate": "45",
    "eggGroup": "비행",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 84,
        "method": "기본"
      },
      {
        "id": 85,
        "method": "Lv.31"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "desc": "3개의 머리가 기쁨·슬픔·분노를 각각 표현한다. 시속 60km로 초원을 질주한다.",
    "stats": {
      "hp": 60,
      "atk": 110,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 110
    }
  },
  {
    "id": 86,
    "no": "No.086",
    "name": "쥬쥬",
    "enName": "Seel",
    "types": [
      "물"
    ],
    "category": "강치포켓몬",
    "height": "1.1m",
    "weight": "90.0kg",
    "ability": "두꺼운지방",
    "hiddenAbility": "아이스바디",
    "catchRate": "190",
    "eggGroup": "수중1 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 86,
        "method": "기본"
      },
      {
        "id": 87,
        "method": "Lv.34"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "desc": "추운 바다를 좋아한다. 두꺼운 지방 덕분에 영하 40도의 바닷물 속에서도 거뜬히 헤엄친다.",
    "stats": {
      "hp": 65,
      "atk": 45,
      "def": 55,
      "spa": 45,
      "spd": 70,
      "spe": 45
    }
  },
  {
    "id": 87,
    "no": "No.087",
    "name": "쥬레곤",
    "enName": "Dewgong",
    "types": [
      "물",
      "얼음"
    ],
    "category": "강치포켓몬",
    "height": "1.7m",
    "weight": "120.0kg",
    "ability": "두꺼운지방",
    "hiddenAbility": "아이스바디",
    "catchRate": "75",
    "eggGroup": "수중1 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 86,
        "method": "기본"
      },
      {
        "id": 87,
        "method": "Lv.34"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "desc": "눈처럼 새하얀 몸은 눈밭이나 빙하 속에서 천적의 눈에 띄지 않게 보호해 준다.",
    "stats": {
      "hp": 90,
      "atk": 70,
      "def": 80,
      "spa": 70,
      "spd": 95,
      "spe": 70
    }
  },
  {
    "id": 88,
    "no": "No.088",
    "name": "질퍽이",
    "enName": "Grimer",
    "types": [
      "독"
    ],
    "category": "진흙포켓몬",
    "height": "0.9m",
    "weight": "30.0kg",
    "ability": "악취",
    "hiddenAbility": "독수",
    "catchRate": "190",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 88,
        "method": "기본"
      },
      {
        "id": 89,
        "method": "Lv.38"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "desc": "오염된 진흙이 X선을 받아 태어났다. 지독한 악취가 나며 지나간 자리에는 풀이 자라지 않는다.",
    "stats": {
      "hp": 80,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 25
    }
  },
  {
    "id": 89,
    "no": "No.089",
    "name": "질뻐기",
    "enName": "Muk",
    "types": [
      "독"
    ],
    "category": "진흙포켓몬",
    "height": "1.2m",
    "weight": "30.0kg",
    "ability": "악취",
    "hiddenAbility": "독수",
    "catchRate": "75",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 88,
        "method": "기본"
      },
      {
        "id": 89,
        "method": "Lv.38"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "desc": "독소가 가득한 진흙 몸을 가졌다. 한 방울만 떨어져도 연못 전체가 오염될 정도다.",
    "stats": {
      "hp": 105,
      "atk": 105,
      "def": 75,
      "spa": 65,
      "spd": 100,
      "spe": 50
    }
  },
  {
    "id": 90,
    "no": "No.090",
    "name": "셀러",
    "enName": "Shellder",
    "types": [
      "물"
    ],
    "category": "두조개포켓몬",
    "height": "0.3m",
    "weight": "4.0kg",
    "ability": "조가비갑옷",
    "hiddenAbility": "방진",
    "catchRate": "190",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 90,
        "method": "기본"
      },
      {
        "id": 91,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "desc": "다이아몬드보다 단단한 껍질로 덮여 있다. 공격받을 때만 껍질을 닫고 혀를 내민다.",
    "stats": {
      "hp": 30,
      "atk": 65,
      "def": 100,
      "spa": 45,
      "spd": 25,
      "spe": 40
    }
  },
  {
    "id": 91,
    "no": "No.091",
    "name": "파르셀",
    "enName": "Cloyster",
    "types": [
      "물",
      "얼음"
    ],
    "category": "두조개포켓몬",
    "height": "1.5m",
    "weight": "132.5kg",
    "ability": "조가비갑옷",
    "hiddenAbility": "방진",
    "catchRate": "60",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 90,
        "method": "기본"
      },
      {
        "id": 91,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "desc": "네이팜탄으로도 부술 수 없는 단단한 껍질을 가졌다. 공격할 때만 껍질을 연다.",
    "stats": {
      "hp": 50,
      "atk": 95,
      "def": 180,
      "spa": 85,
      "spd": 45,
      "spe": 70
    }
  },
  {
    "id": 92,
    "no": "No.092",
    "name": "고오스",
    "enName": "Gastly",
    "types": [
      "고스트",
      "독"
    ],
    "category": "가스포켓몬",
    "height": "1.3m",
    "weight": "0.1kg",
    "ability": "부유",
    "hiddenAbility": "없음",
    "catchRate": "190",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 92,
        "method": "기본"
      },
      {
        "id": 93,
        "method": "Lv.25"
      },
      {
        "id": 94,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "desc": "몸의 95%가 독가스로 이루어져 있다. 바람이 강하게 불면 몸이 날아갈 수 있다.",
    "stats": {
      "hp": 30,
      "atk": 35,
      "def": 30,
      "spa": 100,
      "spd": 35,
      "spe": 80
    }
  },
  {
    "id": 93,
    "no": "No.093",
    "name": "고우스트",
    "enName": "Haunter",
    "types": [
      "고스트",
      "독"
    ],
    "category": "가스포켓몬",
    "height": "1.6m",
    "weight": "0.1kg",
    "ability": "부유",
    "hiddenAbility": "없음",
    "catchRate": "90",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 92,
        "method": "기본"
      },
      {
        "id": 93,
        "method": "Lv.25"
      },
      {
        "id": 94,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "desc": "어둠 속에서 기척 없이 다가가 가스 상태의 손으로 상대를 핥아 생명력을 빼앗는다.",
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 45,
      "spa": 115,
      "spd": 55,
      "spe": 95
    }
  },
  {
    "id": 94,
    "no": "No.094",
    "name": "팬텀",
    "enName": "Gengar",
    "types": [
      "고스트",
      "독"
    ],
    "category": "그림자포켓몬",
    "height": "1.5m",
    "weight": "40.5kg",
    "ability": "저주받은바디",
    "hiddenAbility": "없음",
    "catchRate": "45",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 92,
        "method": "기본"
      },
      {
        "id": 93,
        "method": "Lv.25"
      },
      {
        "id": 94,
        "method": "통신교환"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "desc": "보름달 밤에 그림자가 제멋대로 움직이며 웃고 있다면 팬텀의 소행임이 틀림없다.",
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    }
  },
  {
    "id": 95,
    "no": "No.095",
    "name": "롱스톤",
    "enName": "Onix",
    "types": [
      "바위",
      "땅"
    ],
    "category": "돌뱀포켓몬",
    "height": "8.8m",
    "weight": "210.0kg",
    "ability": "돌머리",
    "hiddenAbility": "깨어진갑옷",
    "catchRate": "45",
    "eggGroup": "광물",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 95,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "desc": "거대한 바위들이 연결된 몸을 가졌다. 시속 80km로 땅속을 파고들며 지진을 일으킨다.",
    "stats": {
      "hp": 35,
      "atk": 45,
      "def": 160,
      "spa": 30,
      "spd": 45,
      "spe": 70
    }
  },
  {
    "id": 96,
    "no": "No.096",
    "name": "슬리프",
    "enName": "Drowzee",
    "types": [
      "에스퍼"
    ],
    "category": "최면포켓몬",
    "height": "1.0m",
    "weight": "32.4kg",
    "ability": "불면",
    "hiddenAbility": "정신력",
    "catchRate": "190",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 96,
        "method": "기본"
      },
      {
        "id": 97,
        "method": "Lv.26"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "desc": "상대를 잠들게 한 뒤 그 꿈을 먹는다. 즐거운 꿈을 먹으면 코가 간질간질하다고 한다.",
    "stats": {
      "hp": 60,
      "atk": 48,
      "def": 45,
      "spa": 43,
      "spd": 90,
      "spe": 42
    }
  },
  {
    "id": 97,
    "no": "No.097",
    "name": "슬리퍼",
    "enName": "Hypno",
    "types": [
      "에스퍼"
    ],
    "category": "최면포켓몬",
    "height": "1.6m",
    "weight": "75.6kg",
    "ability": "불면",
    "hiddenAbility": "정신력",
    "catchRate": "75",
    "eggGroup": "인간형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 96,
        "method": "기본"
      },
      {
        "id": 97,
        "method": "Lv.26"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "desc": "손에 들고 있는 추를 흔들어 눈이 마주친 상대를 3초 만에 깊은 최면에 빠뜨린다.",
    "stats": {
      "hp": 85,
      "atk": 73,
      "def": 70,
      "spa": 73,
      "spd": 115,
      "spe": 67
    }
  },
  {
    "id": 98,
    "no": "No.098",
    "name": "크랩",
    "enName": "Krabby",
    "types": [
      "물"
    ],
    "category": "게포켓몬",
    "height": "0.4m",
    "weight": "6.5kg",
    "ability": "괴력집게",
    "hiddenAbility": "우격다짐",
    "catchRate": "225",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 98,
        "method": "기본"
      },
      {
        "id": 99,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "desc": "바닷가에 구멍을 파고 산다. 커다란 집게는 싸움에서 부러져도 금방 새로 자라난다.",
    "stats": {
      "hp": 30,
      "atk": 105,
      "def": 90,
      "spa": 25,
      "spd": 25,
      "spe": 50
    }
  },
  {
    "id": 99,
    "no": "No.099",
    "name": "킹크랩",
    "enName": "Kingler",
    "types": [
      "물"
    ],
    "category": "집게포켓몬",
    "height": "1.3m",
    "weight": "60.0kg",
    "ability": "괴력집게",
    "hiddenAbility": "우격다짐",
    "catchRate": "60",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 98,
        "method": "기본"
      },
      {
        "id": 99,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "desc": "거대한 한쪽 집게는 1만 마력의 파괴력을 지녔지만 너무 무거워서 다루기 힘들다.",
    "stats": {
      "hp": 55,
      "atk": 130,
      "def": 115,
      "spa": 50,
      "spd": 50,
      "spe": 75
    }
  },
  {
    "id": 100,
    "no": "No.100",
    "name": "찌리리공",
    "enName": "Voltorb",
    "types": [
      "전기"
    ],
    "category": "볼포켓몬",
    "height": "0.5m",
    "weight": "10.4kg",
    "ability": "방음",
    "hiddenAbility": "유폭",
    "catchRate": "190",
    "eggGroup": "광물",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 100,
        "method": "기본"
      },
      {
        "id": 101,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "desc": "몬스터볼과 똑같이 생겼다. 작은 충격에도 쉽게 폭발하므로 조심해서 다뤄야 한다.",
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 55,
      "spe": 100
    }
  },
  {
    "id": 101,
    "no": "No.101",
    "name": "붐볼",
    "enName": "Electrode",
    "types": [
      "전기"
    ],
    "category": "볼포켓몬",
    "height": "1.2m",
    "weight": "66.6kg",
    "ability": "방음",
    "hiddenAbility": "유폭",
    "catchRate": "60",
    "eggGroup": "광물",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 100,
        "method": "기본"
      },
      {
        "id": 101,
        "method": "Lv.30"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    "desc": "체내에 방대한 전기 에너지를 저장하고 있다. 심심할 때 스스로 폭발해 주위를 놀라게 한다.",
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 150
    }
  },
  {
    "id": 102,
    "no": "No.102",
    "name": "아라리",
    "enName": "Exeggcute",
    "types": [
      "풀",
      "에스퍼"
    ],
    "category": "알포켓몬",
    "height": "0.4m",
    "weight": "2.5kg",
    "ability": "엽록소",
    "hiddenAbility": "수확",
    "catchRate": "90",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 102,
        "method": "기본"
      },
      {
        "id": 103,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    "desc": "6개의 알이 텔레파시로 서로 대화를 나눈다. 1개가 떨어져도 금방 다시 모여든다.",
    "stats": {
      "hp": 60,
      "atk": 40,
      "def": 80,
      "spa": 60,
      "spd": 45,
      "spe": 40
    }
  },
  {
    "id": 103,
    "no": "No.103",
    "name": "나시",
    "enName": "Exeggutor",
    "types": [
      "풀",
      "에스퍼"
    ],
    "category": "야자열매포켓몬",
    "height": "2.0m",
    "weight": "120.0kg",
    "ability": "엽록소",
    "hiddenAbility": "수확",
    "catchRate": "45",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 102,
        "method": "기본"
      },
      {
        "id": 103,
        "method": "리프의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    "desc": "걸어 다니는 열대우림이라 불린다. 3개의 머리가 각자 다른 생각을 하며 염력을 사용한다.",
    "stats": {
      "hp": 95,
      "atk": 95,
      "def": 85,
      "spa": 125,
      "spd": 75,
      "spe": 55
    }
  },
  {
    "id": 104,
    "no": "No.104",
    "name": "탕구리",
    "enName": "Cubone",
    "types": [
      "땅"
    ],
    "category": "고독포켓몬",
    "height": "0.4m",
    "weight": "6.5kg",
    "ability": "돌머리",
    "hiddenAbility": "전투무장",
    "catchRate": "190",
    "eggGroup": "괴수",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 104,
        "method": "기본"
      },
      {
        "id": 105,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    "desc": "사별한 어미의 해골을 머리에 쓰고 있다. 밤마다 어미를 그리워하며 울음소리를 낸다.",
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 95,
      "spa": 40,
      "spd": 50,
      "spe": 35
    }
  },
  {
    "id": 105,
    "no": "No.105",
    "name": "텅구리",
    "enName": "Marowak",
    "types": [
      "땅"
    ],
    "category": "뼈다귀포켓몬",
    "height": "1.0m",
    "weight": "45.0kg",
    "ability": "돌머리",
    "hiddenAbility": "전투무장",
    "catchRate": "75",
    "eggGroup": "괴수",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 104,
        "method": "기본"
      },
      {
        "id": 105,
        "method": "Lv.28"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    "desc": "손에 쥔 뼈다귀를 부메랑처럼 던져 멀리 있는 적도 정확하게 명중시킨다.",
    "stats": {
      "hp": 60,
      "atk": 80,
      "def": 110,
      "spa": 50,
      "spd": 80,
      "spe": 45
    }
  },
  {
    "id": 106,
    "no": "No.106",
    "name": "시라소몬",
    "enName": "Hitmonlee",
    "types": [
      "격투"
    ],
    "category": "킥포켓몬",
    "height": "1.5m",
    "weight": "49.8kg",
    "ability": "유연",
    "hiddenAbility": "곡예",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 106,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    "desc": "다리가 용수철처럼 자유자재로 늘어난다. 어떤 자세에서도 화려하고 강력한 발차기를 날린다.",
    "stats": {
      "hp": 50,
      "atk": 120,
      "def": 53,
      "spa": 35,
      "spd": 110,
      "spe": 87
    }
  },
  {
    "id": 107,
    "no": "No.107",
    "name": "홍수몬",
    "enName": "Hitmonchan",
    "types": [
      "격투"
    ],
    "category": "펀치포켓몬",
    "height": "1.4m",
    "weight": "50.2kg",
    "ability": "날카로운눈",
    "hiddenAbility": "정신력",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 107,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    "desc": "프로 복서의 혼이 깃들어 있다. 신칸센보다 빠른 펀치로 콘크리트 벽도 부순다.",
    "stats": {
      "hp": 50,
      "atk": 105,
      "def": 79,
      "spa": 35,
      "spd": 110,
      "spe": 76
    }
  },
  {
    "id": 108,
    "no": "No.108",
    "name": "내루미",
    "enName": "Lickitung",
    "types": [
      "노말"
    ],
    "category": "핥기포켓몬",
    "height": "1.2m",
    "weight": "65.5kg",
    "ability": "마이페이스",
    "hiddenAbility": "노말스킨",
    "catchRate": "45",
    "eggGroup": "괴수",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 108,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    "desc": "키의 2배나 되는 2m 길이의 혀를 손처럼 자유자재로 움직여 먹이를 잡는다.",
    "stats": {
      "hp": 90,
      "atk": 55,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 30
    }
  },
  {
    "id": 109,
    "no": "No.109",
    "name": "또가스",
    "enName": "Koffing",
    "types": [
      "독"
    ],
    "category": "독가스포켓몬",
    "height": "0.6m",
    "weight": "1.0kg",
    "ability": "부유",
    "hiddenAbility": "악취",
    "catchRate": "190",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 109,
        "method": "기본"
      },
      {
        "id": 110,
        "method": "Lv.35"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    "desc": "체내에 여러 종류의 독가스가 가득 차 있다. 온도가 올라가면 폭발할 위험이 있다.",
    "stats": {
      "hp": 40,
      "atk": 65,
      "def": 95,
      "spa": 60,
      "spd": 45,
      "spe": 35
    }
  },
  {
    "id": 110,
    "no": "No.110",
    "name": "또도가스",
    "enName": "Weezing",
    "types": [
      "독"
    ],
    "category": "독가스포켓몬",
    "height": "1.2m",
    "weight": "9.5kg",
    "ability": "부유",
    "hiddenAbility": "악취",
    "catchRate": "60",
    "eggGroup": "부정형",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 109,
        "method": "기본"
      },
      {
        "id": 110,
        "method": "Lv.35"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    "desc": "두 개의 또가스가 합쳐져 태어났다. 독가스를 흡수할수록 몸이 크게 부풀어 오른다.",
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 120,
      "spa": 85,
      "spd": 70,
      "spe": 60
    }
  },
  {
    "id": 111,
    "no": "No.111",
    "name": "뿔카노",
    "enName": "Rhyhorn",
    "types": [
      "땅",
      "바위"
    ],
    "category": "뿔포켓몬",
    "height": "1.0m",
    "weight": "115.0kg",
    "ability": "피뢰침",
    "hiddenAbility": "이판사판",
    "catchRate": "120",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 111,
        "method": "기본"
      },
      {
        "id": 112,
        "method": "Lv.42"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    "desc": "뼈가 인간의 1000배나 단단하다. 머리는 나쁘지만 몸통박치기로 빌딩도 무너뜨린다.",
    "stats": {
      "hp": 80,
      "atk": 85,
      "def": 95,
      "spa": 30,
      "spd": 30,
      "spe": 25
    }
  },
  {
    "id": 112,
    "no": "No.112",
    "name": "코뿌리",
    "enName": "Rhydon",
    "types": [
      "땅",
      "바위"
    ],
    "category": "드릴포켓몬",
    "height": "1.9m",
    "weight": "120.0kg",
    "ability": "피뢰침",
    "hiddenAbility": "이판사판",
    "catchRate": "60",
    "eggGroup": "괴수 / 육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 111,
        "method": "기본"
      },
      {
        "id": 112,
        "method": "Lv.42"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    "desc": "뒷다리로 서서 걸을 수 있게 되면서 지능이 높아졌다. 드릴 같은 뿔을 회전시켜 바위를 뚫는다.",
    "stats": {
      "hp": 105,
      "atk": 130,
      "def": 120,
      "spa": 45,
      "spd": 45,
      "spe": 40
    }
  },
  {
    "id": 113,
    "no": "No.113",
    "name": "럭키",
    "enName": "Chansey",
    "types": [
      "노말"
    ],
    "category": "알포켓몬",
    "height": "1.1m",
    "weight": "34.6kg",
    "ability": "자연회복",
    "hiddenAbility": "치유의마음",
    "catchRate": "30",
    "eggGroup": "요정",
    "hatchSteps": "10,240보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 113,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    "desc": "행복을 가져다준다고 알려진 희귀한 포켓몬. 배의 주머니에 영양 만점의 알을 품고 있다.",
    "stats": {
      "hp": 250,
      "atk": 5,
      "def": 5,
      "spa": 35,
      "spd": 105,
      "spe": 50
    }
  },
  {
    "id": 114,
    "no": "No.114",
    "name": "덩쿠리",
    "enName": "Tangela",
    "types": [
      "풀"
    ],
    "category": "넝쿨포켓몬",
    "height": "1.0m",
    "weight": "35.0kg",
    "ability": "엽록소",
    "hiddenAbility": "재생력",
    "catchRate": "45",
    "eggGroup": "식물",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 114,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    "desc": "파란 덩굴로 온몸이 뒤덮여 있어 정체를 알 수 없다. 덩굴이 끊어져도 금방 다시 자란다.",
    "stats": {
      "hp": 65,
      "atk": 55,
      "def": 115,
      "spa": 100,
      "spd": 40,
      "spe": 60
    }
  },
  {
    "id": 115,
    "no": "No.115",
    "name": "캥카",
    "enName": "Kangaskhan",
    "types": [
      "노말"
    ],
    "category": "가족포켓몬",
    "height": "2.2m",
    "weight": "80.0kg",
    "ability": "일찍기상",
    "hiddenAbility": "정신력",
    "catchRate": "45",
    "eggGroup": "괴수",
    "hatchSteps": "5,120보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 115,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "desc": "배의 주머니에서 새끼를 키운다. 새끼가 위험에 처하면 어떤 강한 상대를 만나도 물러서지 않는다.",
    "stats": {
      "hp": 105,
      "atk": 95,
      "def": 80,
      "spa": 40,
      "spd": 80,
      "spe": 90
    }
  },
  {
    "id": 116,
    "no": "No.116",
    "name": "쏘드라",
    "enName": "Horsea",
    "types": [
      "물"
    ],
    "category": "드래곤포켓몬",
    "height": "0.4m",
    "weight": "8.0kg",
    "ability": "쓱쓱",
    "hiddenAbility": "습기",
    "catchRate": "225",
    "eggGroup": "수중1 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 116,
        "method": "기본"
      },
      {
        "id": 117,
        "method": "Lv.32"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    "desc": "위험을 느끼면 입에서 새까만 먹물을 뿜어 적의 시야를 가리고 재빨리 도망친다.",
    "stats": {
      "hp": 30,
      "atk": 40,
      "def": 70,
      "spa": 70,
      "spd": 25,
      "spe": 60
    }
  },
  {
    "id": 117,
    "no": "No.117",
    "name": "시드라",
    "enName": "Seadra",
    "types": [
      "물"
    ],
    "category": "드래곤포켓몬",
    "height": "1.2m",
    "weight": "25.0kg",
    "ability": "독가시",
    "hiddenAbility": "습기",
    "catchRate": "75",
    "eggGroup": "수중1 / 드래곤",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 116,
        "method": "기본"
      },
      {
        "id": 117,
        "method": "Lv.32"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    "desc": "등지느러미를 빠르게 움직여 소용돌이를 일으킨다. 가시에 찔리면 며칠 동안 저릴 정도로 독이 강하다.",
    "stats": {
      "hp": 55,
      "atk": 65,
      "def": 95,
      "spa": 95,
      "spd": 45,
      "spe": 85
    }
  },
  {
    "id": 118,
    "no": "No.118",
    "name": "콘치",
    "enName": "Goldeen",
    "types": [
      "물"
    ],
    "category": "금붕어포켓몬",
    "height": "0.6m",
    "weight": "15.0kg",
    "ability": "쓱쓱",
    "hiddenAbility": "피뢰침",
    "catchRate": "225",
    "eggGroup": "수중2",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 118,
        "method": "기본"
      },
      {
        "id": 119,
        "method": "Lv.33"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    "desc": "지느러미가 드레스처럼 우아하게 흔들려 물속의 여왕이라 불린다. 이마의 뿔로 공격한다.",
    "stats": {
      "hp": 45,
      "atk": 67,
      "def": 60,
      "spa": 35,
      "spd": 50,
      "spe": 63
    }
  },
  {
    "id": 119,
    "no": "No.119",
    "name": "왕콘치",
    "enName": "Seaking",
    "types": [
      "물"
    ],
    "category": "금붕어포켓몬",
    "height": "1.3m",
    "weight": "39.0kg",
    "ability": "쓱쓱",
    "hiddenAbility": "피뢰침",
    "catchRate": "60",
    "eggGroup": "수중2",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 118,
        "method": "기본"
      },
      {
        "id": 119,
        "method": "Lv.33"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    "desc": "가을이 되면 강을 거슬러 올라가는 모습을 볼 수 있다. 드릴 같은 뿔로 바위에 둥지를 판다.",
    "stats": {
      "hp": 80,
      "atk": 92,
      "def": 65,
      "spa": 65,
      "spd": 80,
      "spe": 68
    }
  },
  {
    "id": 120,
    "no": "No.120",
    "name": "별가사리",
    "enName": "Staryu",
    "types": [
      "물"
    ],
    "category": "별포켓몬",
    "height": "0.8m",
    "weight": "34.5kg",
    "ability": "발광",
    "hiddenAbility": "애널라이즈",
    "catchRate": "225",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 120,
        "method": "기본"
      },
      {
        "id": 121,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    "desc": "몸의 일부가 잘려나가도 중심의 코어만 남아 있으면 몇 번이고 다시 재생한다.",
    "stats": {
      "hp": 30,
      "atk": 45,
      "def": 55,
      "spa": 70,
      "spd": 55,
      "spe": 85
    }
  },
  {
    "id": 121,
    "no": "No.121",
    "name": "아쿠스타",
    "enName": "Starmie",
    "types": [
      "물",
      "에스퍼"
    ],
    "category": "수수께끼포켓몬",
    "height": "1.1m",
    "weight": "80.0kg",
    "ability": "발광",
    "hiddenAbility": "애널라이즈",
    "catchRate": "60",
    "eggGroup": "수중3",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 120,
        "method": "기본"
      },
      {
        "id": 121,
        "method": "물의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    "desc": "몸의 중심에 있는 코어가 일곱 빛깔로 반짝인다. 기하학적인 모양 때문에 우주 생물이라는 소문도 있다.",
    "stats": {
      "hp": 60,
      "atk": 75,
      "def": 85,
      "spa": 100,
      "spd": 85,
      "spe": 115
    }
  },
  {
    "id": 122,
    "no": "No.122",
    "name": "마임맨",
    "enName": "Mr. Mime",
    "types": [
      "에스퍼"
    ],
    "category": "배리어포켓몬",
    "height": "1.3m",
    "weight": "54.5kg",
    "ability": "방음",
    "hiddenAbility": "테크니션",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 122,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    "desc": "판토마임 명인으로 손가락 끝에서 나오는 파동으로 보이지 않는 단단한 벽을 만들어낸다.",
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 65,
      "spa": 100,
      "spd": 120,
      "spe": 90
    }
  },
  {
    "id": 123,
    "no": "No.123",
    "name": "스라크",
    "enName": "Scyther",
    "types": [
      "벌레",
      "비행"
    ],
    "category": "버마재비포켓몬",
    "height": "1.5m",
    "weight": "56.0kg",
    "ability": "벌레의알림",
    "hiddenAbility": "불굴의마음",
    "catchRate": "45",
    "eggGroup": "벌레",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 123,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    "desc": "양팔의 날카로운 낫과 닌자 같은 민첩한 움직임으로 잔상을 남기며 상대를 베어 넘긴다.",
    "stats": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 105
    }
  },
  {
    "id": 124,
    "no": "No.124",
    "name": "루주라",
    "enName": "Jynx",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "category": "인간형태포켓몬",
    "height": "1.4m",
    "weight": "40.6kg",
    "ability": "둔감",
    "hiddenAbility": "건조피부",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♀ 100%",
    "evolutions": [
      {
        "id": 124,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    "desc": "허리를 흔들며 리드미컬하게 걷는다. 루주라를 본 사람은 무의식중에 함께 춤을 추게 된다.",
    "stats": {
      "hp": 65,
      "atk": 50,
      "def": 35,
      "spa": 115,
      "spd": 95,
      "spe": 95
    }
  },
  {
    "id": 125,
    "no": "No.125",
    "name": "에레브",
    "enName": "Electabuzz",
    "types": [
      "전기"
    ],
    "category": "전기포켓몬",
    "height": "1.1m",
    "weight": "30.0kg",
    "ability": "정전기",
    "hiddenAbility": "의기양양",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 125,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    "desc": "강한 전기를 좋아해 발전소 근처에 자주 나타난다. 정전의 원인이 되기도 한다.",
    "stats": {
      "hp": 65,
      "atk": 83,
      "def": 57,
      "spa": 95,
      "spd": 85,
      "spe": 105
    }
  },
  {
    "id": 126,
    "no": "No.126",
    "name": "마그마",
    "enName": "Magmar",
    "types": [
      "불꽃"
    ],
    "category": "불뿜기포켓몬",
    "height": "1.3m",
    "weight": "44.5kg",
    "ability": "불꽃몸",
    "hiddenAbility": "의기양양",
    "catchRate": "45",
    "eggGroup": "인간형",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 75% : ♀ 25%",
    "evolutions": [
      {
        "id": 126,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    "desc": "화산 분화구 근처에서 태어났다. 체온이 1200도에 달해 온몸이 아지랑이처럼 일렁인다.",
    "stats": {
      "hp": 65,
      "atk": 95,
      "def": 57,
      "spa": 100,
      "spd": 85,
      "spe": 93
    }
  },
  {
    "id": 127,
    "no": "No.127",
    "name": "쁘사이저",
    "enName": "Pinsir",
    "types": [
      "벌레"
    ],
    "category": "뿔집게포켓몬",
    "height": "1.5m",
    "weight": "55.0kg",
    "ability": "괴력집게",
    "hiddenAbility": "자기과신",
    "catchRate": "45",
    "eggGroup": "벌레",
    "hatchSteps": "6,400보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 127,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "desc": "머리의 커다란 두 뿔로 거대한 통나무도 단번에 부러뜨린다. 추위를 싫어해 밤에는 땅속에서 잔다.",
    "stats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 70,
      "spe": 85
    }
  },
  {
    "id": 128,
    "no": "No.128",
    "name": "켄타로스",
    "enName": "Tauros",
    "types": [
      "노말"
    ],
    "category": "성난소포켓몬",
    "height": "1.4m",
    "weight": "88.4kg",
    "ability": "위협",
    "hiddenAbility": "우격다짐",
    "catchRate": "45",
    "eggGroup": "육상",
    "hatchSteps": "5,120보",
    "genderRatio": "♂ 100%",
    "evolutions": [
      {
        "id": 128,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    "desc": "3개의 꼬리로 자신을 때리며 투지를 불태운 뒤 전속력으로 돌진하는 난폭한 포켓몬이다.",
    "stats": {
      "hp": 75,
      "atk": 100,
      "def": 95,
      "spa": 40,
      "spd": 70,
      "spe": 110
    }
  },
  {
    "id": 129,
    "no": "No.129",
    "name": "잉어킹",
    "enName": "Magikarp",
    "types": [
      "물"
    ],
    "category": "물고기포켓몬",
    "height": "0.9m",
    "weight": "10.0kg",
    "ability": "쓱쓱",
    "hiddenAbility": "주눅",
    "catchRate": "255",
    "eggGroup": "수중2 / 드래곤",
    "hatchSteps": "1,280보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 129,
        "method": "기본"
      },
      {
        "id": 130,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    "desc": "힘도 스피드도 거의 없어 세계에서 가장 약하고 한심한 포켓몬으로 불리지만 생명력은 놀랍도록 강하다.",
    "stats": {
      "hp": 20,
      "atk": 10,
      "def": 55,
      "spa": 15,
      "spd": 20,
      "spe": 80
    }
  },
  {
    "id": 130,
    "no": "No.130",
    "name": "갸라도스",
    "enName": "Gyarados",
    "types": [
      "물",
      "비행"
    ],
    "category": "흉악포켓몬",
    "height": "6.5m",
    "weight": "235.0kg",
    "ability": "위협",
    "hiddenAbility": "자기과신",
    "catchRate": "45",
    "eggGroup": "수중2 / 드래곤",
    "hatchSteps": "1,280보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 129,
        "method": "기본"
      },
      {
        "id": 130,
        "method": "Lv.20"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "desc": "한 번 날뛰기 시작하면 주위가 전부 불타 없어질 때까지 분노가 가라앉지 않는 흉폭한 포켓몬이다.",
    "stats": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    }
  },
  {
    "id": 131,
    "no": "No.131",
    "name": "라프라스",
    "enName": "Lapras",
    "types": [
      "물",
      "얼음"
    ],
    "category": "탈것포켓몬",
    "height": "2.5m",
    "weight": "220.0kg",
    "ability": "저수",
    "hiddenAbility": "촉촉바디",
    "catchRate": "45",
    "eggGroup": "괴수 / 수중1",
    "hatchSteps": "10,240보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 131,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    "desc": "사람의 말을 이해할 만큼 영리하고 상냥하다. 사람을 등에 태우고 바다를 건너는 것을 좋아한다.",
    "stats": {
      "hp": 130,
      "atk": 85,
      "def": 80,
      "spa": 85,
      "spd": 95,
      "spe": 60
    }
  },
  {
    "id": 132,
    "no": "No.132",
    "name": "메타몽",
    "enName": "Ditto",
    "types": [
      "노말"
    ],
    "category": "변신포켓몬",
    "height": "0.3m",
    "weight": "4.0kg",
    "ability": "유연",
    "hiddenAbility": "괴짜",
    "catchRate": "35",
    "eggGroup": "메타몽",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 132,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    "desc": "전신의 세포를 재구성하여 본 것의 모습과 능력까지 똑같이 변신할 수 있다.",
    "stats": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    }
  },
  {
    "id": 133,
    "no": "No.133",
    "name": "이브이",
    "enName": "Eevee",
    "types": [
      "노말"
    ],
    "category": "진화포켓몬",
    "height": "0.3m",
    "weight": "6.5kg",
    "ability": "적응력",
    "hiddenAbility": "위험예지",
    "catchRate": "45",
    "eggGroup": "육상",
    "hatchSteps": "8,960보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 133,
        "method": "기본"
      },
      {
        "id": 134,
        "method": "물의돌"
      },
      {
        "id": 135,
        "method": "천둥의돌"
      },
      {
        "id": 136,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    "desc": "불규칙한 유전자를 가지고 있어 주변 환경에 따라 다양한 모습으로 진화할 가능성을 지녔다.",
    "stats": {
      "hp": 55,
      "atk": 55,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 55
    }
  },
  {
    "id": 134,
    "no": "No.134",
    "name": "샤미드",
    "enName": "Vaporeon",
    "types": [
      "물"
    ],
    "category": "거품뿜기포켓몬",
    "height": "1.0m",
    "weight": "29.0kg",
    "ability": "저수",
    "hiddenAbility": "촉촉바디",
    "catchRate": "45",
    "eggGroup": "육상",
    "hatchSteps": "8,960보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 133,
        "method": "기본"
      },
      {
        "id": 134,
        "method": "물의돌"
      },
      {
        "id": 135,
        "method": "천둥의돌"
      },
      {
        "id": 136,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    "desc": "세포 구조가 물 분자와 비슷해 물속에 녹아들면 보이지 않게 된다. 맑은 물가를 좋아한다.",
    "stats": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    }
  },
  {
    "id": 135,
    "no": "No.135",
    "name": "쥬피썬더",
    "enName": "Jolteon",
    "types": [
      "전기"
    ],
    "category": "번개포켓몬",
    "height": "0.8m",
    "weight": "24.5kg",
    "ability": "축전",
    "hiddenAbility": "속보",
    "catchRate": "45",
    "eggGroup": "육상",
    "hatchSteps": "8,960보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 133,
        "method": "기본"
      },
      {
        "id": 134,
        "method": "물의돌"
      },
      {
        "id": 135,
        "method": "천둥의돌"
      },
      {
        "id": 136,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    "desc": "체내의 전기를 모아 1만 볼트의 전격을 쏜다. 털이 바늘처럼 뾰족하게 곤두선다.",
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    }
  },
  {
    "id": 136,
    "no": "No.136",
    "name": "부스터",
    "enName": "Flareon",
    "types": [
      "불꽃"
    ],
    "category": "불꽃포켓몬",
    "height": "0.9m",
    "weight": "25.0kg",
    "ability": "타오르는불꽃",
    "hiddenAbility": "근성",
    "catchRate": "45",
    "eggGroup": "육상",
    "hatchSteps": "8,960보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 133,
        "method": "기본"
      },
      {
        "id": 134,
        "method": "물의돌"
      },
      {
        "id": 135,
        "method": "천둥의돌"
      },
      {
        "id": 136,
        "method": "불꽃의돌"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    "desc": "체내에 불꽃 주머니가 있어 숨을 깊이 들이마신 뒤 1700도의 뜨거운 화염을 내뿜는다.",
    "stats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    }
  },
  {
    "id": 137,
    "no": "No.137",
    "name": "폴리곤",
    "enName": "Porygon",
    "types": [
      "노말"
    ],
    "category": "가상포켓몬",
    "height": "0.8m",
    "weight": "36.5kg",
    "ability": "트레이스",
    "hiddenAbility": "애널라이즈",
    "catchRate": "45",
    "eggGroup": "광물",
    "hatchSteps": "5,120보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 137,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    "desc": "최신 과학 기술로 만들어진 인공 포켓몬. 전자 공간 안으로 자유롭게 들어갈 수 있다.",
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    }
  },
  {
    "id": 138,
    "no": "No.138",
    "name": "암나이트",
    "enName": "Omanyte",
    "types": [
      "바위",
      "물"
    ],
    "category": "소용돌이포켓몬",
    "height": "0.4m",
    "weight": "7.5kg",
    "ability": "쓱쓱",
    "hiddenAbility": "깨어진갑옷",
    "catchRate": "45",
    "eggGroup": "수중1 / 수중3",
    "hatchSteps": "7,680보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 138,
        "method": "기본"
      },
      {
        "id": 139,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    "desc": "고대 바다에 살았던 화석 포켓몬. 10개의 다리를 흔들며 바다 속을 헤엄쳤다.",
    "stats": {
      "hp": 35,
      "atk": 40,
      "def": 100,
      "spa": 90,
      "spd": 55,
      "spe": 35
    }
  },
  {
    "id": 139,
    "no": "No.139",
    "name": "암스타",
    "enName": "Omastar",
    "types": [
      "바위",
      "물"
    ],
    "category": "소용돌이포켓몬",
    "height": "1.0m",
    "weight": "35.0kg",
    "ability": "쓱쓱",
    "hiddenAbility": "깨어진갑옷",
    "catchRate": "45",
    "eggGroup": "수중1 / 수중3",
    "hatchSteps": "7,680보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 138,
        "method": "기본"
      },
      {
        "id": 139,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    "desc": "날카로운 이빨로 먹이의 껍질을 부수고 체액을 빨아먹었다. 껍질이 너무 무거워져 멸종했다고 한다.",
    "stats": {
      "hp": 70,
      "atk": 60,
      "def": 125,
      "spa": 115,
      "spd": 70,
      "spe": 55
    }
  },
  {
    "id": 140,
    "no": "No.140",
    "name": "투구",
    "enName": "Kabuto",
    "types": [
      "바위",
      "물"
    ],
    "category": "껍질포켓몬",
    "height": "0.5m",
    "weight": "11.5kg",
    "ability": "쓱쓱",
    "hiddenAbility": "깨어진갑옷",
    "catchRate": "45",
    "eggGroup": "수중1 / 수중3",
    "hatchSteps": "7,680보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 140,
        "method": "기본"
      },
      {
        "id": 141,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    "desc": "3억 년 전 해변에 살았던 포켓몬의 화석이 부활했다. 등껍질 안쪽에 숨겨진 눈으로 주위를 본다.",
    "stats": {
      "hp": 30,
      "atk": 80,
      "def": 90,
      "spa": 55,
      "spd": 45,
      "spe": 55
    }
  },
  {
    "id": 141,
    "no": "No.141",
    "name": "투구푸스",
    "enName": "Kabutops",
    "types": [
      "바위",
      "물"
    ],
    "category": "껍질포켓몬",
    "height": "1.3m",
    "weight": "40.5kg",
    "ability": "쓱쓱",
    "hiddenAbility": "깨어진갑옷",
    "catchRate": "45",
    "eggGroup": "수중1 / 수중3",
    "hatchSteps": "7,680보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 140,
        "method": "기본"
      },
      {
        "id": 141,
        "method": "Lv.40"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    "desc": "물속을 빠르게 헤엄치며 양팔의 날카로운 낫으로 먹이를 베어 사냥한다.",
    "stats": {
      "hp": 60,
      "atk": 115,
      "def": 105,
      "spa": 65,
      "spd": 70,
      "spe": 80
    }
  },
  {
    "id": 142,
    "no": "No.142",
    "name": "프테라",
    "enName": "Aerodactyl",
    "types": [
      "바위",
      "비행"
    ],
    "category": "화석포켓몬",
    "height": "1.8m",
    "weight": "59.0kg",
    "ability": "돌머리",
    "hiddenAbility": "긴장감",
    "catchRate": "45",
    "eggGroup": "비행",
    "hatchSteps": "8,960보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 142,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "desc": "호박 속에 남아 있던 공룡 유전자에서 부활시킨 포켓몬. 톱날 같은 이빨로 공격한다.",
    "stats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 60,
      "spd": 75,
      "spe": 130
    }
  },
  {
    "id": 143,
    "no": "No.143",
    "name": "잠만보",
    "enName": "Snorlax",
    "types": [
      "노말"
    ],
    "category": "졸음포켓몬",
    "height": "2.1m",
    "weight": "460.0kg",
    "ability": "두꺼운지방",
    "hiddenAbility": "먹보",
    "catchRate": "25",
    "eggGroup": "괴수",
    "hatchSteps": "10,240보",
    "genderRatio": "♂ 87.5% : ♀ 12.5%",
    "evolutions": [
      {
        "id": 143,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    "desc": "하루에 400kg의 음식을 먹지 않으면 성에 차지 않는다. 다 먹으면 바로 잠들어 버린다.",
    "stats": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    }
  },
  {
    "id": 144,
    "no": "No.144",
    "name": "프리져",
    "enName": "Articuno",
    "types": [
      "얼음",
      "비행"
    ],
    "category": "냉동포켓몬",
    "height": "1.7m",
    "weight": "55.4kg",
    "ability": "프레셔",
    "hiddenAbility": "눈숨기",
    "catchRate": "3",
    "eggGroup": "미발견",
    "hatchSteps": "20,480보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 144,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    "desc": "눈보라 속에서 조난당한 사람 앞에 나타난다고 전해지는 전설의 새포켓몬. 날개가 얼음처럼 반짝인다.",
    "stats": {
      "hp": 90,
      "atk": 85,
      "def": 100,
      "spa": 95,
      "spd": 125,
      "spe": 85
    }
  },
  {
    "id": 145,
    "no": "No.145",
    "name": "썬더",
    "enName": "Zapdos",
    "types": [
      "전기",
      "비행"
    ],
    "category": "전기포켓몬",
    "height": "1.6m",
    "weight": "52.6kg",
    "ability": "프레셔",
    "hiddenAbility": "정전기",
    "catchRate": "3",
    "eggGroup": "미발견",
    "hatchSteps": "20,480보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 145,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    "desc": "먹구름 속에서 벼락과 함께 나타나는 전설의 새포켓몬. 날갯짓을 할 때마다 번개가 떨어진다.",
    "stats": {
      "hp": 90,
      "atk": 90,
      "def": 85,
      "spa": 125,
      "spd": 90,
      "spe": 100
    }
  },
  {
    "id": 146,
    "no": "No.146",
    "name": "파이어",
    "enName": "Moltres",
    "types": [
      "불꽃",
      "비행"
    ],
    "category": "화염포켓몬",
    "height": "2.0m",
    "weight": "60.0kg",
    "ability": "프레셔",
    "hiddenAbility": "불꽃몸",
    "catchRate": "3",
    "eggGroup": "미발견",
    "hatchSteps": "20,480보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 146,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    "desc": "불타오르는 날개로 밤하늘도 붉게 물들이는 전설의 새포켓몬. 봄을 가장 먼저 알린다고 한다.",
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 125,
      "spd": 85,
      "spe": 90
    }
  },
  {
    "id": 147,
    "no": "No.147",
    "name": "미뇽",
    "enName": "Dratini",
    "types": [
      "드래곤"
    ],
    "category": "드래곤포켓몬",
    "height": "1.8m",
    "weight": "3.3kg",
    "ability": "탈피",
    "hiddenAbility": "이상한비늘",
    "catchRate": "45",
    "eggGroup": "수중1 / 드래곤",
    "hatchSteps": "10,240보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 147,
        "method": "기본"
      },
      {
        "id": 148,
        "method": "Lv.30"
      },
      {
        "id": 149,
        "method": "Lv.55"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    "desc": "오랫동안 환상의 포켓몬으로 불렸다. 탈피를 거듭하면서 몸집이 점점 길고 커진다.",
    "stats": {
      "hp": 41,
      "atk": 64,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 50
    }
  },
  {
    "id": 148,
    "no": "No.148",
    "name": "신뇽",
    "enName": "Dragonair",
    "types": [
      "드래곤"
    ],
    "category": "드래곤포켓몬",
    "height": "4.0m",
    "weight": "16.5kg",
    "ability": "탈피",
    "hiddenAbility": "이상한비늘",
    "catchRate": "45",
    "eggGroup": "수중1 / 드래곤",
    "hatchSteps": "10,240보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 147,
        "method": "기본"
      },
      {
        "id": 148,
        "method": "Lv.30"
      },
      {
        "id": 149,
        "method": "Lv.55"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    "desc": "온몸에서 신성한 오라를 뿜어낸다. 목과 꼬리의 구슬에 날씨를 조종하는 힘이 깃들어 있다.",
    "stats": {
      "hp": 61,
      "atk": 84,
      "def": 65,
      "spa": 70,
      "spd": 70,
      "spe": 70
    }
  },
  {
    "id": 149,
    "no": "No.149",
    "name": "망나뇽",
    "enName": "Dragonite",
    "types": [
      "드래곤",
      "비행"
    ],
    "category": "드래곤포켓몬",
    "height": "2.2m",
    "weight": "210.0kg",
    "ability": "정신력",
    "hiddenAbility": "멀티스케일",
    "catchRate": "45",
    "eggGroup": "수중1 / 드래곤",
    "hatchSteps": "10,240보",
    "genderRatio": "♂ 50% : ♀ 50%",
    "evolutions": [
      {
        "id": 147,
        "method": "기본"
      },
      {
        "id": 148,
        "method": "Lv.30"
      },
      {
        "id": 149,
        "method": "Lv.55"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    "desc": "큰 덩치로 하늘을 날아 지구를 약 16시간 만에 일주한다. 조난당한 배를 육지까지 안내하는 상냥한 포켓몬.",
    "stats": {
      "hp": 91,
      "atk": 134,
      "def": 95,
      "spa": 100,
      "spd": 100,
      "spe": 80
    }
  },
  {
    "id": 150,
    "no": "No.150",
    "name": "뮤츠",
    "enName": "Mewtwo",
    "types": [
      "에스퍼"
    ],
    "category": "유전포켓몬",
    "height": "2.0m",
    "weight": "122.0kg",
    "ability": "프레셔",
    "hiddenAbility": "긴장감",
    "catchRate": "3",
    "eggGroup": "미발견",
    "hatchSteps": "30,720보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 150,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "desc": "유전자 재조합을 통해 탄생한 포켓몬. 포켓몬 중에서도 가장 강력한 사이코 파워를 지녔다고 전해진다.",
    "stats": {
      "hp": 106,
      "atk": 110,
      "def": 90,
      "spa": 154,
      "spd": 90,
      "spe": 130
    }
  },
  {
    "id": 151,
    "no": "No.151",
    "name": "뮤",
    "enName": "Mew",
    "types": [
      "에스퍼"
    ],
    "category": "신종포켓몬",
    "height": "0.4m",
    "weight": "4.0kg",
    "ability": "싱크로",
    "hiddenAbility": "없음",
    "catchRate": "45",
    "eggGroup": "미발견",
    "hatchSteps": "30,720보",
    "genderRatio": "무성",
    "evolutions": [
      {
        "id": 151,
        "method": "단일 개체 (진화 없음)"
      }
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    "desc": "모든 포켓몬의 유전자를 지니고 있어 온갖 기술을 사용할 수 있기 때문에 포켓몬의 조상이라고 불린다.",
    "stats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    }
  }
];

// 1세대 15타입 목록 (페어리/악/강철 미존재 시절 기준)
const GEN1_TYPES = [
  "노말", "불꽃", "물", "전기", "풀",
  "얼음", "격투", "독", "땅", "비행",
  "에스퍼", "벌레", "바위", "고스트", "드래곤"
];

const TYPE_CLASS_MAP = {
  "풀": "type-grass",
  "불꽃": "type-fire",
  "물": "type-water",
  "전기": "type-electric",
  "노말": "type-normal",
  "독": "type-poison",
  "비행": "type-flying",
  "벌레": "type-bug",
  "땅": "type-ground",
  "바위": "type-rock",
  "격투": "type-fighting",
  "에스퍼": "type-psychic",
  "얼음": "type-ice",
  "고스트": "type-ghost",
  "드래곤": "type-dragon"
};

// 1세대 방어 상성 차트 (공격 타입 -> 방어 타입 배율, 1세대 원작 기준: 고스트->에스퍼 0배, 독<->벌레 2배, 얼음->불꽃 1배)
const GEN1_CHART = {
  "노말": { "바위": 0.5, "고스트": 0 },
  "불꽃": { "불꽃": 0.5, "물": 0.5, "풀": 2, "얼음": 2, "벌레": 2, "바위": 0.5, "드래곤": 0.5 },
  "물": { "불꽃": 2, "물": 0.5, "풀": 0.5, "땅": 2, "바위": 2, "드래곤": 0.5 },
  "전기": { "물": 2, "전기": 0.5, "풀": 0.5, "땅": 0, "비행": 2, "드래곤": 0.5 },
  "풀": { "불꽃": 0.5, "물": 2, "풀": 0.5, "독": 0.5, "땅": 2, "비행": 0.5, "벌레": 0.5, "바위": 2, "드래곤": 0.5 },
  "얼음": { "물": 0.5, "풀": 2, "얼음": 0.5, "땅": 2, "비행": 2, "드래곤": 2 },
  "격투": { "노말": 2, "얼음": 2, "독": 0.5, "비행": 0.5, "에스퍼": 0.5, "벌레": 0.5, "바위": 2, "고스트": 0 },
  "독": { "풀": 2, "독": 0.5, "땅": 0.5, "벌레": 2, "바위": 0.5, "고스트": 0.5 },
  "땅": { "불꽃": 2, "전기": 2, "풀": 0.5, "독": 2, "비행": 0, "벌레": 0.5, "바위": 2 },
  "비행": { "전기": 0.5, "풀": 2, "격투": 2, "벌레": 2, "바위": 0.5 },
  "에스퍼": { "격투": 2, "독": 2, "에스퍼": 0.5 },
  "벌레": { "불꽃": 0.5, "풀": 2, "격투": 0.5, "독": 2, "비행": 0.5, "에스퍼": 2, "고스트": 0.5 },
  "바위": { "불꽃": 2, "얼음": 2, "격투": 0.5, "땅": 0.5, "비행": 2, "벌레": 2 },
  "고스트": { "노말": 0, "에스퍼": 0, "고스트": 2 },
  "드래곤": { "드래곤": 2 }
};

function calcDefenseMatchups(defTypes) {
  const groups = { "4": [], "2": [], "1": [], "0.5": [], "0.25": [], "0": [] };
  GEN1_TYPES.forEach((atkType) => {
    let mult = 1;
    defTypes.forEach((defType) => {
      const eff = (GEN1_CHART[atkType] && GEN1_CHART[atkType][defType] !== undefined)
        ? GEN1_CHART[atkType][defType]
        : 1;
      mult *= eff;
    });
    const key = String(mult);
    if (groups[key]) groups[key].push(atkType);
  });
  return groups;
}

function renderTypeBadges(types) {
  return types
    .map((t) => `<span class="type-badge ${TYPE_CLASS_MAP[t] || "type-normal"}">${t}</span>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("pokedex-grid");
  const searchInput = document.getElementById("pokemon-search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");
  const modal = document.getElementById("pokemon-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  if (!grid) return;

  let selectedType = "all";
  let keyword = "";

  function renderCards() {
    const filtered = POKEMON_DATA.filter((p) => {
      const matchType =
        selectedType === "all" || p.types.includes(selectedType);
      const q = keyword.trim().toLowerCase();
      const matchKeyword =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.enName.toLowerCase().includes(q) ||
        p.no.toLowerCase().includes(q) ||
        String(p.id).padStart(3, "0").includes(q) ||
        String(p.id) === q;
      return matchType && matchKeyword;
    });

    resultCount.textContent = `총 ${filtered.length}마리의 포켓몬이 표시됩니다.`;

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    grid.innerHTML = filtered
      .map((p) => `
        <article class="poke-card" tabindex="0" role="button" aria-label="${p.no} ${p.name} 상세 정보 보기" data-id="${p.id}">
          <div class="poke-card-top">
            <span class="dex-no">${p.no}</span>
            <div class="poke-types">${renderTypeBadges(p.types)}</div>
          </div>
          <div class="poke-img-wrap">
            <img src="${p.image}" alt="${p.name} 공식 일러스트" loading="lazy">
          </div>
          <h2 class="poke-name">${p.name}</h2>
          <p class="poke-category">${p.category}</p>
          <span class="poke-more">도감 문서 보기 →</span>
        </article>
      `)
      .join("");
  }

  function openModal(pokemonId) {
    const p = POKEMON_DATA.find((item) => item.id === Number(pokemonId));
    if (!p) return;

    // 6. 진화 단계 HTML 생성
    let evoHtml = "";
    if (p.id === 133 || p.id === 134 || p.id === 135 || p.id === 136) {
      const eevee = POKEMON_DATA.find((x) => x.id === 133);
      const branches = p.evolutions.filter((e) => e.id !== 133).map((e) => {
        const target = POKEMON_DATA.find((x) => x.id === e.id);
        return `
          <div class="evo-branch-item">
            <span class="evo-arrow">→ <small>${e.method}</small> →</span>
            <button type="button" class="evo-node ${target.id === p.id ? "current" : ""}" data-evo-id="${target.id}">
              <img src="${target.image}" alt="${target.name}">
              <span>${target.no} ${target.name}</span>
            </button>
          </div>
        `;
      }).join("");
      evoHtml = `
        <div class="evo-eevee-wrap">
          <button type="button" class="evo-node ${eevee.id === p.id ? "current" : ""}" data-evo-id="${eevee.id}">
            <img src="${eevee.image}" alt="${eevee.name}">
            <span>${eevee.no} ${eevee.name}</span>
          </button>
          <div class="evo-branches">${branches}</div>
        </div>
      `;
    } else if (p.evolutions.length === 1) {
      evoHtml = `<p class="evo-single">진화하지 않는 단일 포켓몬입니다.</p>`;
    } else {
      evoHtml = `<div class="evo-chain">` + p.evolutions.map((step, idx) => {
        const target = POKEMON_DATA.find((x) => x.id === step.id);
        const arrow = idx > 0 ? `<span class="evo-arrow">→<br><small>${step.method}</small></span>` : "";
        return `
          ${arrow}
          <button type="button" class="evo-node ${target.id === p.id ? "current" : ""}" data-evo-id="${target.id}">
            <img src="${target.image}" alt="${target.name}">
            <span>${target.no} ${target.name}</span>
          </button>
        `;
      }).join("") + `</div>`;
    }

    // 7. 방어상성 표 HTML 생성
    const matchups = calcDefenseMatchups(p.types);
    const multLabels = [
      { key: "4", label: "4배 (매우 약점)" },
      { key: "2", label: "2배 (약점)" },
      { key: "1", label: "1배 (보통)" },
      { key: "0.5", label: "0.5배 (반감)" },
      { key: "0.25", label: "0.25배 (이중 반감)" },
      { key: "0", label: "0배 (무효)" }
    ];
    const defenseRows = multLabels
      .filter((m) => matchups[m.key].length > 0)
      .map((m) => `
        <tr>
          <th>${m.label}</th>
          <td><div class="defense-badges">${renderTypeBadges(matchups[m.key])}</div></td>
        </tr>
      `)
      .join("");

    // 8. 종족치 HTML 생성
    const statList = [
      { label: "HP", value: p.stats.hp, color: "#ff5959" },
      { label: "공격", value: p.stats.atk, color: "#f5ac78" },
      { label: "방어", value: p.stats.def, color: "#fae078" },
      { label: "특수공격", value: p.stats.spa, color: "#9db7f5" },
      { label: "특수방어", value: p.stats.spd, color: "#a7db8d" },
      { label: "스피드", value: p.stats.spe, color: "#fa92b2" }
    ];
    const totalStat = statList.reduce((acc, cur) => acc + cur.value, 0);
    const statsRows = statList.map((s) => {
      const pct = Math.min(100, Math.round((s.value / 250) * 100));
      return `
        <tr>
          <th>${s.label}</th>
          <td class="stat-num">${s.value}</td>
          <td class="stat-bar-cell">
            <div class="stat-bar-bg">
              <div class="stat-bar-fill" style="width: ${pct}%; background-color: ${s.color};"></div>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    modalBody.innerHTML = `
      <div class="namu-infobox">
        <!-- 상단 타이틀 바 -->
        <div class="namu-title-bar">
          <span class="namu-dex-no">${p.no}</span>
          <h2 id="modal-title" class="namu-title">${p.name} <small>${p.enName}</small></h2>
        </div>

        <!-- 1. 포켓몬 일러스트 -->
        <div class="namu-illust-box">
          <img src="${p.image}" alt="${p.name} 공식 일러스트">
        </div>

        <!-- 2. 기본정보 -->
        <h3 class="namu-sec-head">1. 기본정보</h3>
        <table class="namu-table">
          <tbody>
            <tr>
              <th>전국도감</th>
              <td>${p.no} (관동지방 · 1세대)</td>
            </tr>
            <tr>
              <th>타입</th>
              <td><div class="poke-types">${renderTypeBadges(p.types)}</div></td>
            </tr>
          </tbody>
        </table>

        <!-- 3. 특성 -->
        <h3 class="namu-sec-head">2. 특성</h3>
        <table class="namu-table">
          <tbody>
            <tr>
              <th>일반 특성</th>
              <td>${p.ability}</td>
            </tr>
            <tr>
              <th>숨겨진 특성</th>
              <td>${p.hiddenAbility}</td>
            </tr>
          </tbody>
        </table>

        <!-- 4. 세부정보 -->
        <h3 class="namu-sec-head">3. 세부정보</h3>
        <table class="namu-table">
          <tbody>
            <tr>
              <th>분류</th>
              <td>${p.category}</td>
            </tr>
            <tr>
              <th>키 / 몸무게</th>
              <td>${p.height} / ${p.weight}</td>
            </tr>
            <tr>
              <th>포획률</th>
              <td>${p.catchRate}</td>
            </tr>
          </tbody>
        </table>

        <!-- 5. 유전정보 -->
        <h3 class="namu-sec-head">4. 유전정보</h3>
        <table class="namu-table">
          <tbody>
            <tr>
              <th>알그룹</th>
              <td>${p.eggGroup}</td>
            </tr>
            <tr>
              <th>부화 걸음수</th>
              <td>${p.hatchSteps}</td>
            </tr>
            <tr>
              <th>성비</th>
              <td>${p.genderRatio}</td>
            </tr>
          </tbody>
        </table>

        <!-- 6. 진화 -->
        <h3 class="namu-sec-head">5. 진화</h3>
        <div class="namu-box-body">
          ${evoHtml}
        </div>

        <!-- 7. 방어상성 (1세대 기준) -->
        <h3 class="namu-sec-head">6. 방어상성 <small>(1세대 15타입 기준)</small></h3>
        <table class="namu-table">
          <tbody>
            ${defenseRows}
          </tbody>
        </table>

        <!-- 8. 종족치 -->
        <h3 class="namu-sec-head">7. 종족치</h3>
        <table class="namu-table stat-table">
          <tbody>
            ${statsRows}
            <tr class="stat-total-row">
              <th>총합</th>
              <td class="stat-num">${totalStat}</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- 9. 도감설명 -->
        <h3 class="namu-sec-head">8. 도감설명</h3>
        <div class="namu-desc-box">
          ${p.desc}
        </div>
      </div>
    `;

    modal.hidden = false;
    modal.querySelector(".modal-card").scrollTop = 0;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  searchInput.addEventListener("input", (e) => {
    keyword = e.target.value;
    renderCards();
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedType = btn.dataset.type;
      renderCards();
    });
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".poke-card");
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".poke-card");
      if (card) {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    }
  });

  modalBody.addEventListener("click", (e) => {
    const evoBtn = e.target.closest(".evo-node");
    if (evoBtn) {
      openModal(evoBtn.dataset.evoId);
    }
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  renderCards();
});
