<script>
    let data = [{"infinitive":"arise","infinitive_tr":"[ə'raɪz]","past_simple":"arose","past_simple_tr":"[ə'rəʊz]","past_participle":"arisen","past_participle_rt":"[ə'rɪzən]","ru":"возникать"},{"infinitive":"awake","infinitive_tr":"[ə'weɪk]","past_simple":"awoke","past_simple_tr":"[ə'wəʊk]","past_participle":"awoken","past_participle_rt":"[ə'wəʊkən]","ru":"будить, просыпаться"},{"infinitive":"be","infinitive_tr":"[bi:]","past_simple":"was,were","past_simple_tr":"[wɔz,wз:]","past_participle":"been","past_participle_rt":"[bi:n]","ru":"быть"},{"infinitive":"bear","infinitive_tr":"[beə]","past_simple":"bore","past_simple_tr":"[bɔ:]","past_participle":"born","past_participle_rt":"[bɔ:n]","ru":"рождать, выносить"},{"infinitive":"beat","infinitive_tr":"[bi:t]","past_simple":"beat","past_simple_tr":"[bi:t]","past_participle":"beaten","past_participle_rt":"['bi:tn]","ru":"бить"},{"infinitive":"become","infinitive_tr":"[bɪ'kʌm]","past_simple":"became","past_simple_tr":"[bɪ'keɪm]","past_participle":"become","past_participle_rt":"[bɪ'kʌm]","ru":"становиться"},{"infinitive":"begin","infinitive_tr":"[bɪ'gɪn]","past_simple":"began","past_simple_tr":"[bɪ'gæn]","past_participle":"begun","past_participle_rt":"[bɪ'gʌn]","ru":"начинать"},{"infinitive":"bend","infinitive_tr":"[bend]","past_simple":"bent","past_simple_tr":"[bent]","past_participle":"bent","past_participle_rt":"[bent]","ru":"гнуть, сгибать"},{"infinitive":"bind","infinitive_tr":"[baɪnd]","past_simple":"bound","past_simple_tr":"[baʊnd]","past_participle":"bound","past_participle_rt":"[baʊnd]","ru":"связывать"},{"infinitive":"bite","infinitive_tr":"[baɪt]","past_simple":"bit","past_simple_tr":"[bɪt]","past_participle":"bitten","past_participle_rt":"['bɪtn]","ru":"кусать"},{"infinitive":"bleed","infinitive_tr":"[bli:d]","past_simple":"bled","past_simple_tr":"[bled]","past_participle":"bled","past_participle_rt":"[bled]","ru":"кровоточить"},{"infinitive":"blow","infinitive_tr":"[bləʊ]","past_simple":"blew","past_simple_tr":"[blu:]","past_participle":"blown","past_participle_rt":"[bləʊn]","ru":"дуть"},{"infinitive":"break","infinitive_tr":"[breɪk]","past_simple":"broke","past_simple_tr":"[brəʊk]","past_participle":"broken","past_participle_rt":"['brəʊkən]","ru":"ломать"},{"infinitive":"breed","infinitive_tr":"[bri:d]","past_simple":"bred","past_simple_tr":"[bred]","past_participle":"bred","past_participle_rt":"[bred]","ru":"выращивать, разводить"},{"infinitive":"bring","infinitive_tr":"[brɪŋ]","past_simple":"brought","past_simple_tr":"[brɔ:t]","past_participle":"brought","past_participle_rt":"[brɔ:t]","ru":"приносить"},{"infinitive":"build","infinitive_tr":"[bɪld]","past_simple":"built","past_simple_tr":"[bɪlt]","past_participle":"built","past_participle_rt":"[bɪlt]","ru":"строить"},{"infinitive":"burn","infinitive_tr":"[bɜ:n]","past_simple":"burnt","past_simple_tr":"[bз:nt]","past_participle":"burnt","past_participle_rt":"[bз:nt]","ru":"гореть, жечь"},{"infinitive":"burst","infinitive_tr":"[bз:st]","past_simple":"burst","past_simple_tr":"[bз:st]","past_participle":"burst","past_participle_rt":"[bз:st]","ru":"разразиться, взрывать"},{"infinitive":"buy","infinitive_tr":"[baɪ]","past_simple":"bought","past_simple_tr":"[bɔ:t]","past_participle":"bought","past_participle_rt":"[bɔ:t]","ru":"покупать"},{"infinitive":"cast","infinitive_tr":"[kɑ:st]","past_simple":"cast","past_simple_tr":"[kɑ:st]","past_participle":"cast","past_participle_rt":"[kɑ:st]","ru":"кинуть, лить металл"},{"infinitive":"catch","infinitive_tr":"[kætʃ]","past_simple":"caught","past_simple_tr":"[kɔ:t]","past_participle":"caught","past_participle_rt":"[kɔ:t]","ru":"ловить, хватать"},{"infinitive":"choose","infinitive_tr":"[tʃu:z]","past_simple":"chose","past_simple_tr":"[tʃəʊz]","past_participle":"chosen","past_participle_rt":"['tʃəʊzən]","ru":"выбирать"},{"infinitive":"come","infinitive_tr":"[kʌm]","past_simple":"came","past_simple_tr":"[keɪm]","past_participle":"come","past_participle_rt":"[kʌm]","ru":"приходить"},{"infinitive":"cost","infinitive_tr":"[kɒst]","past_simple":"cost","past_simple_tr":"[kɒst]","past_participle":"cost","past_participle_rt":"[kɒst]","ru":"стоить"},{"infinitive":"cut","infinitive_tr":"[kʌt]","past_simple":"cut","past_simple_tr":"[kʌt]","past_participle":"cut","past_participle_rt":"[kʌt]","ru":"резать"},{"infinitive":"deal","infinitive_tr":"[dɪ:l]","past_simple":"dealt","past_simple_tr":"[delt]","past_participle":"dealt","past_participle_rt":"[delt]","ru":"заниматься, иметь дело с"},{"infinitive":"dig","infinitive_tr":"[dɪg]","past_simple":"dug","past_simple_tr":"[dʌg]","past_participle":"dug","past_participle_rt":"[dʌg]","ru":"рыть, копать"},{"infinitive":"do","infinitive_tr":"[du:]","past_simple":"did","past_simple_tr":"[dɪd]","past_participle":"done","past_participle_rt":"[dʌn]","ru":"делать"},{"infinitive":"draw","infinitive_tr":"[drɔ:]","past_simple":"drew","past_simple_tr":"[dru:]","past_participle":"drawn","past_participle_rt":"[drɔ:n]","ru":"рисовать, тащить"},{"infinitive":"dream","infinitive_tr":"[dri:m]","past_simple":"dreamt","past_simple_tr":"[dremt]","past_participle":"dreamt","past_participle_rt":"[dremt]","ru":"мечтать, сниться"},{"infinitive":"drink","infinitive_tr":"[drɪŋk]","past_simple":"drank","past_simple_tr":"[dræŋk]","past_participle":"drunk","past_participle_rt":"[drʌŋk]","ru":"пить"},{"infinitive":"drive","infinitive_tr":"[draɪv]","past_simple":"drove","past_simple_tr":"[drəʊv]","past_participle":"driven","past_participle_rt":"['drɪvən]","ru":"водить"},{"infinitive":"eat","infinitive_tr":"[i:t]","past_simple":"ate","past_simple_tr":"[et]","past_participle":"eaten","past_participle_rt":"['i:tn]","ru":"есть"},{"infinitive":"fall","infinitive_tr":"[fɔ:l]","past_simple":"fell","past_simple_tr":"[fel]","past_participle":"fallen","past_participle_rt":"['fɔ:lən]","ru":"падать"},{"infinitive":"feed","infinitive_tr":"[fi:d]","past_simple":"fed","past_simple_tr":"[fed]","past_participle":"fed","past_participle_rt":"[fed]","ru":"кормить"},{"infinitive":"feel","infinitive_tr":"[fi:l]","past_simple":"felt","past_simple_tr":"[felt]","past_participle":"felt","past_participle_rt":"[felt]","ru":"чувствовать"},{"infinitive":"fight","infinitive_tr":"[faɪt]","past_simple":"fought","past_simple_tr":"[fɔ:t]","past_participle":"fought","past_participle_rt":"[fɔ:t]","ru":"бороться, драться"},{"infinitive":"find","infinitive_tr":"[faɪnd]","past_simple":"found","past_simple_tr":"[faʊnd]","past_participle":"found","past_participle_rt":"[faʊnd]","ru":"находить"},{"infinitive":"fit","infinitive_tr":"[fɪt]","past_simple":"fit","past_simple_tr":"[fɪt]","past_participle":"fit","past_participle_rt":"[fɪt]","ru":"подходить по размеру"},{"infinitive":"fly","infinitive_tr":"[flaɪ]","past_simple":"flew","past_simple_tr":"[flu:]","past_participle":"flown","past_participle_rt":"[fləʊn]","ru":"летать"},{"infinitive":"forget","infinitive_tr":"[fə'get]","past_simple":"forgot","past_simple_tr":"[fə'gɒt]","past_participle":"forgotten","past_participle_rt":"[fə'gɒtn]","ru":"забывать"},{"infinitive":"forgive","infinitive_tr":"[fə'gɪv]","past_simple":"forgave","past_simple_tr":"[fə'geɪv]","past_participle":"forgiven","past_participle_rt":"[fə'gɪvən]","ru":"прощать"},{"infinitive":"freeze","infinitive_tr":"[fri:z]","past_simple":"froze","past_simple_tr":"[frəʊz]","past_participle":"frozen","past_participle_rt":"['frəʊzən]","ru":"замерзать"},{"infinitive":"get","infinitive_tr":"[get]","past_simple":"got","past_simple_tr":"[gɒt]","past_participle":"got","past_participle_rt":"[gɒt]","ru":"получать, становиться"},{"infinitive":"give","infinitive_tr":"[gɪv]","past_simple":"gave","past_simple_tr":"[geɪv]","past_participle":"given","past_participle_rt":"['gɪvən]","ru":"давать"},{"infinitive":"go","infinitive_tr":"[gəʊ]","past_simple":"went","past_simple_tr":"[went]","past_participle":"gone","past_participle_rt":"[gɒn]","ru":"идти, ходить"},{"infinitive":"grow","infinitive_tr":"[grəʊ]","past_simple":"grew","past_simple_tr":"[gru:]","past_participle":"grown","past_participle_rt":"[grəʊn]","ru":"расти"},{"infinitive":"hang","infinitive_tr":"[hæŋ]","past_simple":"hung","past_simple_tr":"[hʌŋ]","past_participle":"hung","past_participle_rt":"[hʌŋ]","ru":"висеть, развешивать"},{"infinitive":"have","infinitive_tr":"[hæv]","past_simple":"had","past_simple_tr":"[hæd]","past_participle":"had","past_participle_rt":"[hæd]","ru":"иметь"},{"infinitive":"hear","infinitive_tr":"[hɪə]","past_simple":"heard","past_simple_tr":"[hɜ:d]","past_participle":"heard","past_participle_rt":"[hɜ:d]","ru":"слышать"},{"infinitive":"hide","infinitive_tr":"[haɪd]","past_simple":"hid","past_simple_tr":"[hɪd]","past_participle":"hidden","past_participle_rt":"['hɪdn]","ru":"прятать"},{"infinitive":"hit","infinitive_tr":"[hɪt]","past_simple":"hit","past_simple_tr":"[hɪt]","past_participle":"hit","past_participle_rt":"[hɪt]","ru":"ударять,  бить в цель"},{"infinitive":"hold","infinitive_tr":"[həʊld]","past_simple":"held","past_simple_tr":"[held]","past_participle":"held","past_participle_rt":"[held]","ru":"держать"},{"infinitive":"hurt","infinitive_tr":"[hɜ:t]","past_simple":"hurt","past_simple_tr":"[hɜ:t]","past_participle":"hurt","past_participle_rt":"[hɜ:t]","ru":"ранить, ушибить"},{"infinitive":"keep","infinitive_tr":"[ki:p]","past_simple":"kept","past_simple_tr":"[kept]","past_participle":"kept","past_participle_rt":"[kept]","ru":"держать, сохранять"},{"infinitive":"kneel","infinitive_tr":"[ni:l]","past_simple":"knelt","past_simple_tr":"[nelt]","past_participle":"knelt","past_participle_rt":"[nelt]","ru":"становиться на колени"},{"infinitive":"knit","infinitive_tr":"[nɪt]","past_simple":"knit","past_simple_tr":"[nɪt]","past_participle":"knit","past_participle_rt":"[nɪt]","ru":"вязать спицами"},{"infinitive":"know","infinitive_tr":"[nəʊ]","past_simple":"knew","past_simple_tr":"[nju:]","past_participle":"known","past_participle_rt":"[nəʊn]","ru":"знать"},{"infinitive":"lay","infinitive_tr":"[leɪ]","past_simple":"laid","past_simple_tr":"[leɪd]","past_participle":"laid","past_participle_rt":"[leɪd]","ru":"класть, положить"},{"infinitive":"lead","infinitive_tr":"[li:d]","past_simple":"led","past_simple_tr":"[led]","past_participle":"led","past_participle_rt":"[led]","ru":"вести, возглавлять"},{"infinitive":"lean","infinitive_tr":"[li:n]","past_simple":"leant","past_simple_tr":"[lent]","past_participle":"leant","past_participle_rt":"[lent]","ru":"прислоняться"},{"infinitive":"learn","infinitive_tr":"[lɜ:n]","past_simple":"learnt","past_simple_tr":"[lɜ:nt]","past_participle":"learnt","past_participle_rt":"[lɜ:nt]","ru":"учить, узнавать новое"},{"infinitive":"leave","infinitive_tr":"[li:v]","past_simple":"left","past_simple_tr":"[left]","past_participle":"left","past_participle_rt":"[left]","ru":"оставлять, покидать, уезжать"},{"infinitive":"lend","infinitive_tr":"[lend]","past_simple":"lent","past_simple_tr":"[lent]","past_participle":"lent","past_participle_rt":"[lent]","ru":"одалживать, давать взаймы"},{"infinitive":"let","infinitive_tr":"[let]","past_simple":"let","past_simple_tr":"[let]","past_participle":"let","past_participle_rt":"[let]","ru":"позволять"},{"infinitive":"lie","infinitive_tr":"[laɪ]","past_simple":"lay","past_simple_tr":"[leɪ]","past_participle":"lain","past_participle_rt":"[leɪn]","ru":"лежать"},{"infinitive":"light","infinitive_tr":"[laɪt]","past_simple":"lit","past_simple_tr":"[lɪt]","past_participle":"lit","past_participle_rt":"[lɪt]","ru":"освещать, зажигать"},{"infinitive":"lose","infinitive_tr":"[lu:z]","past_simple":"lost","past_simple_tr":"[lɒst]","past_participle":"lost","past_participle_rt":"[lɒst]","ru":"терять"},{"infinitive":"make","infinitive_tr":"[meɪk]","past_simple":"made","past_simple_tr":"[meɪd]","past_participle":"made","past_participle_rt":"[meɪd]","ru":"делать,изготавливать, заставлять"},{"infinitive":"mean","infinitive_tr":"[mi:n]","past_simple":"meant","past_simple_tr":"[ment]","past_participle":"meant","past_participle_rt":"[ment]","ru":"значить"},{"infinitive":"meet","infinitive_tr":"[mi:t]","past_simple":"met","past_simple_tr":"[met]","past_participle":"met","past_participle_rt":"[met]","ru":"встречать"},{"infinitive":"mistake","infinitive_tr":"[mis'teɪk]","past_simple":"mistook","past_simple_tr":"[mis'tʊk]","past_participle":"mistaken","past_participle_rt":"[mis'teɪken]","ru":"ошибаться"},{"infinitive":"pay","infinitive_tr":"[peɪ]","past_simple":"paid","past_simple_tr":"[peɪd]","past_participle":"paid","past_participle_rt":"[peɪd]","ru":"платить"},{"infinitive":"put","infinitive_tr":"[pʊt]","past_simple":"put","past_simple_tr":"[pʊt]","past_participle":"put","past_participle_rt":"[pʊt]","ru":"класть, ставить"},{"infinitive":"read","infinitive_tr":"[ri:d]","past_simple":"read","past_simple_tr":"[red]","past_participle":"read","past_participle_rt":"[red]","ru":"читать"},{"infinitive":"ride","infinitive_tr":"[raɪd]","past_simple":"rode","past_simple_tr":"[rəʊd]","past_participle":"ridden","past_participle_rt":"['rɪdn]","ru":"ехать верхом"},{"infinitive":"ring","infinitive_tr":"[rɪŋ]","past_simple":"rang","past_simple_tr":"[ræŋ]","past_participle":"rung","past_participle_rt":"[rʌŋ]","ru":"звонить, звенеть"},{"infinitive":"rise","infinitive_tr":"[raɪz]","past_simple":"rose","past_simple_tr":"[rəʊz]","past_participle":"risen","past_participle_rt":"['rɪzən]","ru":"подниматься"},{"infinitive":"run","infinitive_tr":"[rʌn]","past_simple":"ran","past_simple_tr":"[ræn]","past_participle":"run","past_participle_rt":"[rʌn]","ru":"бежать"},{"infinitive":"saw","infinitive_tr":"[sɔ:]","past_simple":"sawed","past_simple_tr":"[sɔ:d]","past_participle":"sawn","past_participle_rt":"[sɔ:n]","ru":"пилить"},{"infinitive":"say","infinitive_tr":"[seɪ]","past_simple":"said","past_simple_tr":"[sed]","past_participle":"said","past_participle_rt":"[sed]","ru":"говорить"},{"infinitive":"see","infinitive_tr":"[si:]","past_simple":"saw","past_simple_tr":"[sɔ:]","past_participle":"seen","past_participle_rt":"[si:n]","ru":"видеть"},{"infinitive":"seek","infinitive_tr":"[si:k]","past_simple":"sought","past_simple_tr":"[sɔ:t]","past_participle":"sought","past_participle_rt":"[sɔ:t]","ru":"искать"},{"infinitive":"sell","infinitive_tr":"[sel]","past_simple":"sold","past_simple_tr":"[səʊld]","past_participle":"sold","past_participle_rt":"[səʊld]","ru":"продавать"},{"infinitive":"send","infinitive_tr":"[send]","past_simple":"sent","past_simple_tr":"[sent]","past_participle":"sent","past_participle_rt":"[sent]","ru":"посылать"},{"infinitive":"set","infinitive_tr":"[set]","past_simple":"set","past_simple_tr":"[set]","past_participle":"set","past_participle_rt":"[set]","ru":"устанавливать, садиться (о солнце)"},{"infinitive":"sew","infinitive_tr":"[səʊ]","past_simple":"sewed","past_simple_tr":"[səʊd]","past_participle":"sewn","past_participle_rt":"[səʊn]","ru":"шить"},{"infinitive":"shake","infinitive_tr":"[ʃeɪk]","past_simple":"shook","past_simple_tr":"[ʃʊk]","past_participle":"shaken","past_participle_rt":"['ʃeɪkən]","ru":"трясти"},{"infinitive":"shine","infinitive_tr":"[ʃaɪn]","past_simple":"shone","past_simple_tr":"[ʃɒn]","past_participle":"shone","past_participle_rt":"[ʃɒn]","ru":"светить, блестеть"},{"infinitive":"shoot","infinitive_tr":"[ʃu:t]","past_simple":"shot","past_simple_tr":"[ʃɒt]","past_participle":"shot","past_participle_rt":"[ʃɒt]","ru":"стрелять"},{"infinitive":"show","infinitive_tr":"[ʃəʊ]","past_simple":"showed","past_simple_tr":"[ʃəʊd]","past_participle":"shown","past_participle_rt":"[ʃəʊn]","ru":"показывать"},{"infinitive":"shrink","infinitive_tr":"[ʃrɪŋk]","past_simple":"shrank","past_simple_tr":"[ʃræŋk]","past_participle":"shrunk","past_participle_rt":"[ʃrʌŋk]","ru":"давать усадку, сокращаться"},{"infinitive":"shut","infinitive_tr":"[ʃʌt]","past_simple":"shut","past_simple_tr":"[ʃʌt]","past_participle":"shut","past_participle_rt":"[ʃʌt]","ru":"закрывать"},{"infinitive":"sing","infinitive_tr":"[sɪŋ]","past_simple":"sang","past_simple_tr":"[sæŋ]","past_participle":"sung","past_participle_rt":"[sʌŋ]","ru":"петь"},{"infinitive":"sink","infinitive_tr":"[sɪŋk]","past_simple":"sank","past_simple_tr":"[sæŋk]","past_participle":"sunk","past_participle_rt":"[sʌŋk]","ru":"тонуть"},{"infinitive":"sit","infinitive_tr":"[sɪt]","past_simple":"sat","past_simple_tr":"[sæt]","past_participle":"sat","past_participle_rt":"[sæt]","ru":"сидеть"},{"infinitive":"sleep","infinitive_tr":"[sli:p]","past_simple":"slept","past_simple_tr":"[slept]","past_participle":"slept","past_participle_rt":"[slept]","ru":"спать"},{"infinitive":"smell","infinitive_tr":"[smel]","past_simple":"smelt","past_simple_tr":"[smelt]","past_participle":"smelt","past_participle_rt":"[smelt]","ru":"нюхать, пахнуть"},{"infinitive":"slide","infinitive_tr":"[slaɪd]","past_simple":"slid","past_simple_tr":"[slɪd]","past_participle":"slid","past_participle_rt":"[slɪd]","ru":"скользить"},{"infinitive":"sow","infinitive_tr":"[səʊ]","past_simple":"sowed","past_simple_tr":"[səʊd]","past_participle":"sown","past_participle_rt":"[səʊn]","ru":"сеять"},{"infinitive":"speak","infinitive_tr":"[spi:k]","past_simple":"spoke","past_simple_tr":"[spəʊk]","past_participle":"spoken","past_participle_rt":"['spəʊkən]","ru":"говорить"},{"infinitive":"spell","infinitive_tr":"[spel]","past_simple":"spelt","past_simple_tr":"[spelt]","past_participle":"spelt","past_participle_rt":"[spelt]","ru":"произносить по буквам"},{"infinitive":"spend","infinitive_tr":"[spend]","past_simple":"spent","past_simple_tr":"[spent]","past_participle":"spent","past_participle_rt":"[spent]","ru":"тратить"},{"infinitive":"spill","infinitive_tr":"[spɪl]","past_simple":"spilt","past_simple_tr":"[spɪlt]","past_participle":"spilt","past_participle_rt":"[spɪlt]","ru":"проливать"},{"infinitive":"spit","infinitive_tr":"[spɪt]","past_simple":"spat","past_simple_tr":"[spæt]","past_participle":"spat","past_participle_rt":"[spæt]","ru":"плевать"},{"infinitive":"split","infinitive_tr":"[splɪt]","past_simple":"split","past_simple_tr":"[splɪt]","past_participle":"split","past_participle_rt":"[splɪt]","ru":"расщеплять"},{"infinitive":"spoil","infinitive_tr":"[spoɪl]","past_simple":"spoilt","past_simple_tr":"[spoɪlt]","past_participle":"spoilt","past_participle_rt":"[spoɪlt]","ru":"портить"},{"infinitive":"spread","infinitive_tr":"[spred]","past_simple":"spread","past_simple_tr":"[spred]","past_participle":"spread","past_participle_rt":"[spred]","ru":"распространять"},{"infinitive":"stand","infinitive_tr":"[stænd]","past_simple":"stood","past_simple_tr":"[stʊd]","past_participle":"stood","past_participle_rt":"[stʊd]","ru":"стоять"},{"infinitive":"steal","infinitive_tr":"[sti:l]","past_simple":"stole","past_simple_tr":"[stəʊl]","past_participle":"stolen","past_participle_rt":"['stəʊlən]","ru":"воровать"},{"infinitive":"stick","infinitive_tr":"[stɪk]","past_simple":"stuck","past_simple_tr":"[stʌk]","past_participle":"stuck","past_participle_rt":"[stʌk]","ru":"приклеивать, застревать"},{"infinitive":"sting","infinitive_tr":"[stɪŋ]","past_simple":"stung","past_simple_tr":"[stʌŋ]","past_participle":"stung","past_participle_rt":"[stʌŋ]","ru":"жалить"},{"infinitive":"strike","infinitive_tr":"[straɪk]","past_simple":"struck","past_simple_tr":"[strʌk]","past_participle":"struck","past_participle_rt":"[strʌk]","ru":"ударять, бастовать"},{"infinitive":"strive","infinitive_tr":"[straɪv]","past_simple":"strove","past_simple_tr":"[strəʊv]","past_participle":"striven","past_participle_rt":"['strɪvn]","ru":"стараться, стремиться"},{"infinitive":"swear","infinitive_tr":"[sweə]","past_simple":"swore","past_simple_tr":"[swɔ:]","past_participle":"sworn","past_participle_rt":"[swɔ:n]","ru":"давать клятву"},{"infinitive":"sweep","infinitive_tr":"[swi:p]","past_simple":"swept","past_simple_tr":"[swept]","past_participle":"swept","past_participle_rt":"[swept]","ru":"мести, подметать"},{"infinitive":"swim","infinitive_tr":"[swɪm]","past_simple":"swam","past_simple_tr":"[swæm]","past_participle":"swum","past_participle_rt":"[swʌm]","ru":"плавать"},{"infinitive":"take","infinitive_tr":"[teɪk]","past_simple":"took","past_simple_tr":"[tʊk]","past_participle":"taken","past_participle_rt":"['teɪkən]","ru":"брать, взять"},{"infinitive":"teach","infinitive_tr":"[ti:tʃ]","past_simple":"taught","past_simple_tr":"[tɔ:t]","past_participle":"taught","past_participle_rt":"[tɔ:t]","ru":"учить"},{"infinitive":"tear","infinitive_tr":"[teə]","past_simple":"tore","past_simple_tr":"[tɔ]","past_participle":"torn","past_participle_rt":"[tɔn]","ru":"рвать"},{"infinitive":"tell","infinitive_tr":"[tel]","past_simple":"told","past_simple_tr":"[təʊld]","past_participle":"told","past_participle_rt":"[təʊld]","ru":"сказать, рассказывать"},{"infinitive":"think","infinitive_tr":"[θɪŋk]","past_simple":"thought","past_simple_tr":"[θɔ:t]","past_participle":"thought","past_participle_rt":"[θɔ:t]","ru":"думать"},{"infinitive":"throw","infinitive_tr":"[θrəʊ]","past_simple":"threw","past_simple_tr":"[θru:]","past_participle":"thrown","past_participle_rt":"[θrəʊn]","ru":"бросать"},{"infinitive":"understand","infinitive_tr":"[ʌndər'stænd]","past_simple":"understood","past_simple_tr":"[ʌndər'stʊd]","past_participle":"understood","past_participle_rt":"[ʌndər'stʊd]","ru":"понимать"},{"infinitive":"upset","infinitive_tr":"[ʌp'set]","past_simple":"upset","past_simple_tr":"[ʌp'set]","past_participle":"upset","past_participle_rt":"[ʌp'set]","ru":"расстраивать, огорчать"},{"infinitive":"wake","infinitive_tr":"[weɪk]","past_simple":"woke","past_simple_tr":"[wəʊk]","past_participle":"woken","past_participle_rt":"['wəʊkən]","ru":"просыпаться, будить"},{"infinitive":"wear","infinitive_tr":"[weər]","past_simple":"wore","past_simple_tr":"[wɔr]","past_participle":"worn","past_participle_rt":"[wɔrn]","ru":"носить"},{"infinitive":"weep","infinitive_tr":"[wi:p]","past_simple":"wept","past_simple_tr":"[wept]","past_participle":"wept","past_participle_rt":"[wept]","ru":"плакать"},{"infinitive":"wet","infinitive_tr":"[wet]","past_simple":"wet","past_simple_tr":"[wet]","past_participle":"wet","past_participle_rt":"[wet]","ru":"мочить, увлажнять"},{"infinitive":"win","infinitive_tr":"[wɪn]","past_simple":"won","past_simple_tr":"[wʌn]","past_participle":"won","past_participle_rt":"[wʌn]","ru":"выигрывать, побеждать"},{"infinitive":"wind","infinitive_tr":"[waɪnd]","past_simple":"wound","past_simple_tr":"[waʊnd]","past_participle":"wound","past_participle_rt":"[waʊnd]","ru":"виться, заводить часы"},{"infinitive":"write","infinitive_tr":"[raɪt]","past_simple":"wrote","past_simple_tr":"[rəʊt]","past_participle":"written","past_participle_rt":"['rɪtn]","ru":"писать"}];

    let fontSize = 14;
    let isHidden = false;

    function increment() {
        if (fontSize < 36) {
            fontSize++
        }
    }

    function decrement() {
        if (fontSize > 2) {
            fontSize--
        }
    }
</script>

<div class="container">
    <div class="head">
        <div class="menu">
            <button on:click={decrement}>-</button>
            &nbsp;<span>{fontSize}</span>&nbsp;
            <button on:click={increment}>+</button>
        </div>
        <div class="menu menu-right">
            <label for="hide">
                Hide English&nbsp;
            </label>
            <input id="hide" value={isHidden} on:change={() => isHidden = !isHidden} type="checkbox" />
        </div>
    </div>
    <table style="font-size: {fontSize}px">
        <thead>
            <tr>
                <td class="left" colspan="1">
                    #
                </td>
                <td colspan="2">
                    Infinitive
                </td>
                <td colspan="2">
                    Past Simple
                </td>
                <td colspan="2">
                    Past Participle
                </td>
                <td class="left" colspan="1">
                    Перевод
                </td>
                <td class="left" colspan="1">
                    #
                </td>
            </tr>
        </thead>
        <tbody>
            {#each data as item, index}
                <tr class:bordered={index % 5 === 0}>
                    <td colspan="1">
                        {index + 1}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.infinitive}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.infinitive_tr}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.past_simple}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.past_simple_tr}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.past_participle}
                    </td>
                    <td class="hideable" class:hidden={isHidden} colspan="1">
                        {item.past_participle_rt}
                    </td>
                    <td colspan="1">
                        {item.ru}
                    </td>
                    <td colspan="1">
                        {index + 1}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .container {
        overflow: scroll;
        padding-top: 32px;
    }

    .head {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px 8px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
    }

    .menu {
        display: flex;
        align-items: baseline;
    }

    .menu-right {
        align-self: flex-end;
    }

    thead tr {
        font-weight: 900;
        text-align: center;
    }

    .left {
        text-align: left;
    }

    td {
        line-height: 1.15;
        padding: 2px 1px;
    }

    td {
        border-top: 1px solid #efeeee;
    }

    .bordered td {
        border-top: 1px solid #bdbaba;
    }

    .hideable {
        transition: opacity 0.2s ease;
    }

    .hidden {
        opacity: 0.03;
    }

    tr {
        border-bottom: 1px solid #a19f9f;
        padding-bottom: 4px;
    }

    td {
        white-space: nowrap;
    }
</style>
