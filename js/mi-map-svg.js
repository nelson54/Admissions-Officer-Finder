var miMap = {
	"Macomb" : "M610.814,535.889l3.127,49.043l17.444-0.988c0,0-2.47-4.772,0.329-9.544c2.798-4.772,6.418-3.786,6.418-3.786l-0.164-3.291 l-0.494-0.823l-1.481-1.152l-0.658-2.468l2.14-1.975h1.316l5.102-3.785l-1.81-2.305l-1.811-20.9L610.814,535.889L610.814,535.889z",
	"Oakland" : "M562.596,539.675l48.219-3.62l3.292,49.042l-48.219,3.291L562.596,539.675z",
	"St_Clair" : "M618.22,506.103l2.305,28.471l20.241-0.823l1.482,21.229l1.809,2.469l2.469-0.329l3.786,1.975l-0.329,3.127l-3.786,0.33 l-0.821,2.961l-1.481,1.646l-0.165,1.152l1.975,0.329l1.48,2.962l0.33,1.646l-1.152,3.291l3.621-4.608l1.151-0.493l3.292,0.658 l0.493-2.305c0,0,5.431-5.266,5.597-6.254c0.164-0.985,0.328-8.722,1.645-12.178c1.315-3.456,0.658-5.102,0.658-5.102 s-0.823-11.026-0.658-13.494c0.165-2.469,3.291-5.76,3.291-5.76s1.977-4.279-0.822-8.723c-2.798-4.443-4.772-7.898-5.103-9.544 c-0.328-1.646-1.315-5.926-1.315-5.926L618.22,506.103L618.22,506.103z",
	"Sanilac" : "M606.042,448.668l41.472-3.291c0,0,0.494,11.52,2.798,17.938c2.304,6.418,3.126,6.252,3.784,15.798 c0.659,9.545,3.786,23.532,3.786,23.532l-39.99,3.622l-0.987-15.14l-9.546,0.328L606.042,448.668L606.042,448.668z",
	"Huron" : "M577.079,443.565v6.583l69.776-4.277c0,0-1.974-16.622-3.95-19.255c-1.976-2.633-4.936-7.241-6.418-11.026 c-1.48-3.785-7.571-6.912-11.52-8.557c-3.949-1.646-4.443-2.963-4.443-2.963l-1.646,0.987l-3.292,0.164l-0.987,1.646h-2.468 c0,0-1.976,5.267-5.103,5.595c-3.127,0.331-5.595,1.646-5.595,1.646s-4.771,1.646-5.761,1.481c-0.986-0.165-1.81-0.493-1.81-0.493 l-1.151,1.645c0,0-1.152,3.949-2.634,4.774c-1.48,0.821-4.114,1.15-4.114,1.15l0.494,1.81l1.81,0.988c0,0-4.607,6.254-5.595,6.254 c-0.988,0-0.494,3.127-0.494,3.127l-2.141,1.974l-0.821,3.786L577.079,443.565L577.079,443.565z",
	"Tuscola" : "M559.635,459.2l1.315,41.636l19.09-0.822v-1.316l8.559-0.33v-10.203l18.761-1.151l-1.152-38.51l-29.128,1.317l-0.659-4.938 l-1.481,0.658l-3.785,0.165l-0.163,2.634l-3.95,4.772l-2.963,4.441C564.077,457.554,562.103,459.364,559.635,459.2L559.635,459.2z",
	"Lapeer" : "M580.039,498.697l1.976,39.002l38.345-2.961l-3.455-43.61l-9.545,0.163l-0.164-3.948l-18.927,0.986l0.33,10.038L580.039,498.697 L580.039,498.697z",
	"Genesee" : "M543.507,549.879l19.748-0.166l-0.659-10.202l19.419-1.481l-1.976-38.016l-38.015,1.481L543.507,549.879z",
	"Bay" : "M541.202,424.806l-0.493,14.153c0,0-4.937,6.418,1.481,11.52c6.417,5.102,7.076,3.62,7.076,3.62l3.62,1.481l4.114,1.646l2.798,1.811 l0.164,13.658l-10.039-0.328l-0.164-4.608l-18.432,0.165v-4.772l-9.873-0.164l-0.741-47.808l9.956-0.082l0.164,10.039 L541.202,424.806L541.202,424.806z",
	"Arenac" : "M520.467,397.158l47.89-1.152l-0.494,6.584l-1.481,2.961v2.14c0,0-7.24,1.317-7.57,3.621c-0.328,2.303-0.328,4.113-0.328,4.113 h-4.444l-6.747,0.494l-3.29,3.291l-0.494,4.115l-2.47,1.48l-10.367-0.163l-0.164-9.382l-9.792-0.329L520.467,397.158 L520.467,397.158z",
	"Iosco" : "M541.531,358.156l1.152,38.015l25.673-0.658c0,0,0.493-8.558,1.976-10.039c1.48-1.48,3.127-2.798,3.127-2.798l3.62,0.329 l0.821,1.152h0.658c0,0,0.495-3.621,2.306-5.266c1.81-1.646,4.771-2.468,4.771-2.468v-6.091l1.153-2.962l-0.823-2.469l0.658-8.063 L541.531,358.156L541.531,358.156z",
	"Alcona" : "M539.885,318.659l44.764-1.646l0.986,2.469l1.317,1.481l0.329,9.215l1.152,2.14l1.48,1.481l-0.822,1.645l-0.494,4.444l-1.646,2.961 l-0.492,13.823l-45.257,1.153L539.885,318.659L539.885,318.659z",
	"Alpena" : "M538.404,280.479l39.661-1.481l2.304,4.444l3.455,2.797l0.659,2.797l1.811,2.962l0.165,3.127l2.633,4.608l-3.457-1.151l-4.112-1.811 l-2.634-1.81h-2.469l-2.468,2.633c0,0-2.306,9.874,3.291,13.494c5.595,3.622,7.57,4.115,7.57,4.115v1.975l-44.929,1.646 L538.404,280.479L538.404,280.479z",
	"Montmorency" : "M500.883,282.125l37.521-1.646l1.646,38.509l-38.18,0.988L500.883,282.125z",
	"Oscoda" : "M501.87,320.141l0.824,38.674l38.508-0.824l-1.317-39.167L501.87,320.141z",
	"Crawford" : "M464.185,320.634v39.167l38.345-0.658l-0.659-39.002L464.185,320.634z",
	"Otsego" : "M463.855,292.328l0.494,28.47l37.521-0.988l-0.987-37.85l-28.471,0.658l-0.165,9.709H463.855L463.855,292.328z",
	"Roscommon" : "M464.185,359.966l0.822,38.674l38.839-1.153l-0.988-38.672L464.185,359.966L464.185,359.966z",
	"Missaukee" : "M426.169,359.966h38.016l0.657,38.674l-38.509-0.165L426.169,359.966L426.169,359.966z",
	"Gladwin" : "M485.578,436.325l19.09,0.165v-2.14l16.292,0.329l-0.493-37.193l-35.876,0.329L485.578,436.325L485.578,436.325z",
	"Midland" : "M486.566,475.658l19.09-0.165v-2.469h15.962l-0.822-38.18h-15.963l-0.165,1.81h-19.09L486.566,475.658L486.566,475.658z",
	"Clare" : "M446.74,437.148l38.838-0.164l-0.822-38.674l-38.345,0.329L446.74,437.148L446.74,437.148z",
	"Osceola" : "M408.561,437.807l38.18-0.329l-0.165-38.508l-38.674-0.165L408.561,437.807L408.561,437.807z",
	"Lake" : "M369.886,398.97l38.016-0.165l0.494,39.166l-38.51,0.329V398.97L369.886,398.97z",
	"Newaygo" : "M369.886,495.734l39.004-0.164l-0.329-57.764l-38.509,0.164L369.886,495.734L369.886,495.734z",
	"Mecosta" : "M447.563,475.987l-0.658-38.51l-38.016,0.329l0.163,38.509L447.563,475.987L447.563,475.987z",
	"Isabella" : "M447.068,437.643l38.51-0.824l0.822,39.003h-39.167L447.068,437.643L447.068,437.643z",
	"Montcalm" : "M429.46,495.57l0.165,19.584l39.002-0.329l-1.481-38.674l-58.256,0.164v19.419L429.46,495.57L429.46,495.57z",
	"Kent" : "M391.28,554.321l38.838-0.165l-0.658-58.586l-39.331,0.495L391.28,554.321z",
	"Muskegon" : "M381.241,505.609h9.217l-0.329-9.544l-20.243-0.167v-19.419l-34.229-0.658l7.241,21.559c0,0,8.229,16.787,8.557,18.104 c0.33,1.316,29.787,0.493,29.787,0.493V505.609L381.241,505.609z",
	"Ottawa" : "M351.62,515.977l29.786,0.329l-0.328-11.026l9.38,0.33l0.986,48.382l-35.546,0.165C355.898,554.156,356.886,526.016,351.62,515.977 L351.62,515.977z",
	"Ionia" : "M468.792,553.169v-38.837l-39.003,0.493l0.494,38.838L468.792,553.169L468.792,553.169z",
	"Allegan" : "M356.063,554.321l54.802,0.328l0.329,38.016l-59.903,0.165C351.29,592.83,356.557,581.64,356.063,554.321L356.063,554.321z",
	"Van_Buren" : "M351.126,592.83l42.458-0.164l0.328,38.838l-38.508,0.494v-19.09l-12.179,0.164C343.226,613.072,348.329,607.971,351.126,592.83 L351.126,592.83z",
	"Berrien" : "M343.226,613.237h12.343l-0.329,53.32l-49.535,0.328c0,0,13.66-7.076,20.407-22.874 C332.858,628.213,327.757,636.604,343.226,613.237L343.226,613.237z",
	"Kalamazoo" : "M394.077,631.998l38.839-0.329l-0.987-39.003l-38.345,0.164L394.077,631.998L394.077,631.998z",
	"Cass" : "M391.773,667.052l0.494-2.47l1.645-2.14l0.165-30.938l-38.345,0.165l-0.328,35.053L391.773,667.052L391.773,667.052z",
	"St_Joseph" : "M433.081,631.998v33.9l-41.471,0.987l0.658-2.139l1.809-2.14l-0.164-30.938L433.081,631.998L433.081,631.998z",
	"Branch" : "M471.261,630.846l0.493,35.218l-38.509-0.165l-0.164-34.065L471.261,630.846L471.261,630.846z",
	"Calhoun" : "M432.093,592.336h47.725l1.152,38.346l-48.218,0.493L432.093,592.336L432.093,592.336z",
	"Barry" : "M449.701,553.499l0.824,38.673l-39.496,0.494l-0.33-38.18L449.701,553.499L449.701,553.499z",
	"Eaton" : "M450.36,592.008l38.838-0.33l-0.822-38.838l-38.839,0.493L450.36,592.008L450.36,592.008z",
	"Jackson" : "M529.024,628.871l-1.481-38.838l-47.726,1.811l1.152,38.838L529.024,628.871z",
	"Hillsdale" : "M471.919,665.733l1.317,0.165l0.163,6.583l37.687-1.811l-1.48-40.813l-38.345,0.988L471.919,665.733L471.919,665.733z",
	"Lenawee" : "M509.441,629.692l48.877-1.81l2.468,39.826l-49.864,2.634L509.441,629.692L509.441,629.692z",
	"Monroe" : "M558.482,627.554l25.838-1.481l13.494-0.986l1.645,0.328l1.316,2.305l6.42,3.785l1.316,1.48l-1.646,2.141l-1.646,0.164l-2.798,3.126 l-0.658,3.127l-4.443,0.659l-1.152,1.646l-0.329,4.442l-1.481,1.81l-1.975,0.493l-1.315,0.824l-1.317,3.291l-2.633,1.975 c0,0-0.494,3.785,0.658,4.938c1.151,1.151,1.975,2.633,1.975,2.633l-0.823,1.152l-28.141,1.975L558.482,627.554L558.482,627.554z",
	"Wayne" : "M631.057,584.107l-55.624,3.785l2.305,38.511l13.988-0.824l6.911-0.658l2.963,3.127l5.596,3.785v-4.114l1.48-0.658l1.974-2.14h1.153 l0.329-2.469l-0.165-3.785l-0.329-11.024c0,0,1.152-4.444,3.949-7.571c2.798-3.126,8.723-1.646,10.861-3.95 c2.14-2.304,1.482-3.949,3.127-6.254C631.222,587.564,631.222,584.108,631.057,584.107L631.057,584.107z",
	"Washtenaw" : "M527.543,590.197l47.726-2.305l2.797,38.675l-48.877,2.139L527.543,590.197z",
	"Livingston" : "M524.746,551.522l38.344-1.644l2.963,38.345l-39.332,1.644L524.746,551.522L524.746,551.522z",
	"Ingham" : "M488.211,552.84l19.584,0.164l0.164-1.15l16.787-0.659l1.975,39.003l-37.522,0.987L488.211,552.84L488.211,552.84z",
	"Shiawassee" : "M506.607,512.951l35.608-0.546l1.279,38.132l-35.744,1.047L506.607,512.951L506.607,512.951z",
	"Clinton" : "M469.021,514.463l37.587-0.465l1.163,39.099l-39.332,0.233L469.021,514.463L469.021,514.463z",
	"Gratiot"  : "M505.444,475.247l1.047,38.519l-37.937,0.697l-1.512-38.518L505.444,475.247z",
	"Oceana" : "M338.619,437.478l31.267,0.164v39.003l-34.229-0.986l-0.988-3.95c0,0-3.621-6.583-4.444-10.038 c-0.822-3.457-0.987-5.926-0.987-5.926S339.442,441.756,338.619,437.478z",
	"Mason" : "M341.417,397.486l28.469,1.646l-0.163,38.345l-31.268-0.164c0,0-0.495-8.559-1.646-12.838c-1.151-4.277-4.773-10.037-4.773-10.037 v-4.772C332.035,409.666,338.289,408.02,341.417,397.486L341.417,397.486z",
	"Manistee" : "M354.583,359.801l33.077,0.165l0.165,38.508l-19.09,0.496l-26.99-1.646c0,0,11.355-18.268,11.519-25.18 c0.165-6.912,0.165-11.026,0.165-11.026L354.583,359.801L354.583,359.801z",
	"Wexford"  : "M387.66,360.13l38.509-0.164v38.345H387.66V360.13L387.66,360.13z",
	"Benzie" : "M367.418,330.837l20.242,0.494l0.165,28.469h-33.408l0.329-3.127c0,0,1.316-3.62,0.659-5.43c-0.659-1.811-2.469-6.089-2.469-6.089 l-0.165-5.432l4.936-1.811l2.47-0.657l1.317-1.646l3.456,0.164L367.418,330.837L367.418,330.837z",
	"Grand_Traverse" : "M387.825,331.166l14.316,0.166l1.975,1.151l1.152-3.127l2.798-6.747l1.811-3.95l-2.14-0.329l-0.329-1.152 c0,0,2.139-1.975,2.139-2.633c0-0.658,0.164-1.974,0.164-1.974l1.153-4.114l2.962-1.811l1.646,2.304l-0.495,1.975 c0,0-1.315,0.164-1.481,0.822c-0.164,0.658-0.164,7.899-0.164,7.899l-0.657,2.633l-2.964,2.633l-1.645,2.14v3.126l-1.646,1.975 l1.977,1.48h2.303l1.976-2.303l-1.317-1.317l2.139-3.292l3.127-2.961l0.989-2.305l3.948-0.165l0.329,3.291l2.633,0.824l1.647,1.316 l0.163,33.078l-38.508,0.165V331.166L387.825,331.166z",
	"Antrim" : "M421.068,282.454l12.835,0.165l0.164,9.874l29.788-0.165l0.328,28.47l-35.876,0.33l-1.316,0.987l-0.658,4.114l-1.974-1.152 l-2.306-0.987l-0.822-2.798h-3.62c0,0,3.88-7.238,4.113-17.444c0.329-14.482,0.494-9.545,0.494-9.545L421.068,282.454 L421.068,282.454z",
	"Leelanau" : "M409.225,282.295l-1.152,0.327l-2.631,3.456h-2.304c0,0-1.659,0.17-4.128,6.259c-2.468,6.089-1.305,2.954-4.761,6.739 c-3.457,3.785-2.972,4.44-3.63,7.238c-0.658,2.798-3.456,6.586-3.456,6.586h-3.61c0,0-0.173-0.653-1.323-1.806 c-1.151-1.151-3.618-1.48-4.935,0c-1.316,1.482-3.13,6.241-3.13,6.241l-1.977-0.154l-1.479-1.324l-1.65-0.327l-1.479,1.153 l-0.499,13.997l34.732,0.979l-0.826-4.109c0,0-0.324-4.767-0.653-6.412c-0.328-1.646,1.805-5.107,1.805-5.107l1.651-1.152 l0.154-8.063l-1.307-1.324l1.152-0.98l0.979-2.304l2.15-2.477c0,0-0.985-2.622-2.631-5.913c-1.646-3.292,0.48-4.608,0.48-4.608 l3.303-0.499l2.131-2.305L409.225,282.295L409.225,282.295z M372.687,288.708l-4.454,1.151l0.174,4.934l2.13,2.478l2.478,3.129 l2.131-0.998l-0.481-2.304l-0.824-0.979l0.824-1.978v-4.109L372.687,288.708L372.687,288.708z M365.602,300.554l-3.282,0.173 l-1.652,1.805l-0.498,4.108l3.13-0.153l2.15-1.152l1.15-2.803L365.602,300.554L365.602,300.554z",
	"Charlevoix" : "M407.246,221.24l-1.151,0.653l-0.326,5.587l-1.326,1.152l-1.151,2.304l-0.152,4.608l-1.498,3.13l0.345,1.824l2.63,1.632h4.436 l0.826-2.304l2.956-2.303l-0.153-5.088l-0.999-1.152l-0.153-5.28l-1.65-2.957L407.246,221.24L407.246,221.24z M442.957,263.69 l-5.76,1.325l-4.107,1.977l-3.303,3.936h-2.804l-4.761,4.608l-1.153,6.759l12.998,0.327l0.174,9.542l38.169,0.326l-0.326-19.411 l-17.934,0.154v2.304l-3.455-0.479l-0.999-2.305c0,0-1.484-5.106-4.28-5.106c-1.333,0-1.827,0.151-1.998,0.307l0.04,0.346 c0,0-0.227-0.174-0.04-0.346L442.957,263.69L442.957,263.69z",
	"Emmet" : "M471.426,218.107l-1.812-0.329l-1.48-0.987l-1.646,1.316l1.316,1.646l-2.139,2.304l-1.976,0.658l-5.925-1.316l-8.229-0.658 l3.292,1.811l2.303,1.975l-0.821,2.304l-2.799,3.621l-2.961,2.797l-3.621,2.469c0,0-6.911,7.734-1.151,15.634 c5.759,7.899,4.442,5.925,7.733,6.583c3.291,0.659,3.457-0.164,3.457-0.164l3.127,1.646l-0.494,2.304l-2.963,1.646 c0,0-5.431,1.481-6.912,1.646c-1.48,0.165-4.278,0-4.278,0l-0.163,2.304l3.783,0.659l2.633,4.115l0.989,2.962l3.455,0.165 l-0.328-2.304l18.595-0.165L471.426,218.107L471.426,218.107z",
	"Cheboygan" : "M510.592,281.796l-1.48-47.231h3.457l-0.824-1.481l-3.785-0.658c0,0-4.113-1.811-8.393-1.811c-4.278,0-2.798-0.493-2.798-0.493 h-1.811l-1.975,1.975c0,0-15.635-10.697-17.608-11.355c-1.976-0.659-3.949-2.634-3.949-2.634l0.986,64.511L510.592,281.796z",
	"Presque_Isle" : "M577.9,278.504c0,0-2.632-2.469-1.974-3.291c0.658-0.823,1.811-1.317,1.811-1.317v-2.798l-2.799-1.152l-4.937-6.912h-1.811 l-1.151,1.151l-0.659-0.987h-2.468l-0.823,0.822l-2.633-0.658l-10.203-7.077l-0.823,1.153l-1.645-0.165v-0.659l-3.622-0.329 c0,0-3.785-2.798-5.43-4.279c-1.646-1.48-4.279-3.785-6.255-3.621c-1.974,0.165-6.582,0-6.582,0l-1.316,0.987l-2.14-0.493 l-2.139-1.646c0,0-0.988-1.974-0.988-3.785c0-1.811-6.254-9.051-6.254-9.051l-3.949,0.33l1.48,47.066L577.9,278.504L577.9,278.504z",
	"Mackinac" : "M382.882,167.097l0.173,31.43h1.978l2.456-2.15l1.326,1.651h2.63l1.326,0.653h5.913c0,0,6.254-9.537,8.064-11.348 c1.81-1.81,4.77-3.62,6.085-3.456c1.317,0.165,1.824,1.325,1.824,1.325l2.131-1.824l1.651-0.327l0.979,1.978h2.305l1.324-0.979 h0.979l3.63,2.783l4.281,0.672l1.957,1.632l4.282-0.479l2.803,1.305l4.282,1.651c0,0,3.939,1.808,9.369,7.238 c3.903,3.904,3.643,4.058,3.188,3.84l4.069,2.246l1.633,2.803l1.823,1.479l3.938,2.304h2.303l1.652-1.651l-1.48-2.784l-0.498-2.804 l1.326-1.651l-1.826-2.131c0,0-0.155-2.471,1.326-3.129c1.48-0.659,2.477-1.325,2.477-1.325l0.153-6.912l1.806-1.632l2.976,2.458 l1.151,0.825l4.437-0.172l1.804,2.976l-0.48,3.61l1.632-0.979l0.173-1.977l1.652-0.173l0.326,1.498l1.805,1.306l0.997-0.979h0.653 l0.653,1.805l3.955,2.957l3.782-2.631l6.259-0.154l0.479-0.671l5.934-0.326l0.173-1.152l3.283-0.327v-1.478l-9.217-0.173v-8.543 l-10.04-0.671l-0.154-8.544l-58.099,0.653l0.499-9.216L382.882,167.097L382.882,167.097z M478.017,205.765l-0.173,3.456l1.324,2.477 l2.306,1.479l1.63,2.304l1.152,0.479l2.305,1.978l2.977,3.456l0.152,1.824l7.565,0.327l1.497-1.152l1.151-2.477l0.807-1.152 l-2.63-1.478l-2.631-2.631l-0.499,2.131l-2.783-0.653c0,0-2.473-1.805-3.13-1.805s-4.935-0.499-4.935-0.499l-1.978-1.805 l-2.63-5.434L478.017,205.765L478.017,205.765z",
	"Chippewa" : "M431.106,110.315l1.646-1.152l5.267,0.164h7.404l2.963-1.316l3.785,0.493l-2.798,2.962l-2.305,4.443l-0.163,16.127l1.315,0.823 l-2.962,1.976l-0.164,2.798l1.316,2.139l2.797,0.823l3.456-0.329l1.317-1.152l1.151,0.329l0.329,1.481l4.607,0.658l2.634,2.633 l2.139-0.657l3.95-1.152l4.444-2.962l4.607,0.165l1.151,2.962c0,0,3.127,4.279,4.773,3.621c1.645-0.658,4.112-1.976,4.112-1.976 h2.799l0.165-3.949c0,0,0.987-1.975,2.962-2.633c1.976-0.659,3.949-1.646,3.949-1.646l3.127,0.988l3.785,0.823l1.975-1.152 l2.469-3.785l3.127,0.33l1.152,0.987h3.291l1.152,3.126l-1.646,2.798l-1.151,6.583l1.481,5.102l1.48,3.292l0.987,1.646l-0.987,0.988 l-0.164,4.772l1.48,1.317l-0.658,2.468l-2.139,1.316l-2.634-0.658l-3.62,0.329l-2.305,1.81l-0.164,3.127l1.316,2.633h2.304 l2.304-2.797l2.305,0.165l1.811,1.152l1.48,1.975l1.975,1.481l2.963-0.164l0.988,1.151l-0.988,1.317l-1.976,1.481l0.494,2.962 l4.279,4.772l4.442,0.659l2.469,1.81l3.128,1.481l1.975-1.811l0.328-1.316l1.811,0.494l1.811,2.304l2.14-0.987v-4.772l-2.304-0.494 l-1.976-2.962l-0.988-2.468l3.127-0.165l2.305,1.811l2.963,0.164l1.48-1.975h7.076l2.14,0.987l1.152,1.481l1.151,1.81l1.646,1.81 l0.33,2.304l1.481,1.645l1.811,0.988l1.975,0.329l-0.165,3.126l-1.81,3.785l-2.306,2.798h-3.949l-3.62-1.646l-2.469-1.481 l-1.151,0.658h-6.419l-2.139,1.152l-3.457-1.481l-2.633-1.974c0,0-2.798-0.823-3.456-0.33c-0.658,0.494-2.797,1.317-2.797,1.317 l-2.14-1.317h-1.976l-0.986,0.823l-4.773-0.659l-3.785-0.823l-0.328-1.481l-8.888-0.329l-0.329-8.723l-10.202-0.658v-8.393 l-58.094,0.165l0.329-8.887l-10.532,0.164L431.106,110.315L431.106,110.315z",
	"Luce" : "M382.723,118.215l6.583,0.164c0,0,3.292,0.823,8.392,0.823c5.103,0,11.027,0.493,14.154-0.823 c3.126-1.316,19.255-8.228,19.255-8.228l-0.33,57.105l-48.054-0.658V118.215L382.723,118.215z",
	"Schoolcraft" : "M336.808,221.893l0.165-15.798h-2.962l0.658-28.964h-9.874v-19.912l19.749,0.329l-0.331-18.925l38.674,0.328l0.164,59.739 l-1.646,0.165l-2.304,1.152l-0.659,2.962l1.152,0.823l-7.241-3.127l-5.101-1.646l-6.42,0.329l-3.784,0.165l-0.328-0.494h-1.153 l-0.658,1.646h-3.29l-4.609,5.267v6.089l-1.315,1.316l-0.494,4.114l-0.988,0.987H340.1l-1.316,2.797L336.808,221.893 L336.808,221.893z",
	"Alger" : "M382.395,118.544h-6.419l-2.799,0.987l-8.063,1.975l-1.48,0.494l-1.646-1.975h-2.963l-7.24,6.089l-8.887,5.595l-4.114,1.317 c0,0-1.975-0.165-2.634,0.164c-0.658,0.329-8.722,9.874-8.722,9.874l-1.481-1.152l-0.165-1.481l-1.481,0.164l-0.988,1.152 l-0.164-2.633l0.987-1.152v-3.621l-1.81-1.811c0,0-1.975,0-2.633,0c-0.659,0-1.811,2.139-1.811,2.139l0.822,3.457l0.33,1.316v5.925 l-0.988-0.494l-1.48-2.139l-0.988-1.152h-4.608l-0.987,1.975l-0.659,2.798l-4.443-0.329l-1.152-2.798l-1.646-1.316l-2.797,0.329 l-0.165-4.113l-1.152-2.14l-2.304-1.481l-2.469,0.988l-1.152,1.48l-2.304,0.164l-3.291,2.469v36.864l38.508,0.493v-20.077 l19.748,0.823l-0.328-19.255l38.18,0.329L382.395,118.544L382.395,118.544z",
	"Delta" : "M274.272,244.274l3.949-7.077l2.962-4.607l3.949-2.798l5.102-3.127l-0.165-10.368l2.963-3.785c0,0,1.975,0.165,1.975,0.988 c0,0.823,1.646,5.102,1.646,5.102l-0.494,9.709l0.988,3.127l3.949-3.456l4.279-1.316l2.304-0.988l0.658-4.937l4.115-3.456 l-0.33-7.406h2.798l1.81,1.811l2.139,1.151l1.975-0.165l1.317,1.152l0.659-0.988l0.658-2.633l3.949-4.114h2.304l1.646,2.139v3.457 l-1.646,1.974l-0.494,2.633l-0.987,0.659l-0.823,1.975l-1.646,0.658l-1.646-0.823l-0.987,0.33l-0.329,4.608l-2.305,1.481 l-0.493,3.621l-2.633,0.659l-0.988,1.645l0.659,2.469l1.975,1.646l2.962,2.304l2.304,0.493l-0.165-5.759l2.633-0.165l0.988-2.304 l-0.329-2.469l1.481-0.987l1.646,1.316l1.81-2.14l0.494-2.797l3.95-0.658l0.33-16.292l-3.292,0.329l0.494-28.799l-58.093-0.658 v19.254l-10.203,0.329l0.165,9.38l3.291,0.494l-0.493,38.18H274.272L274.272,244.274z",
	"Marquette" : "M216.179,91.719l3.127,0.329l4.443,0.988h4.115l2.139,1.646h3.456l2.469,0.822l3.456,2.139l0.823,4.115l3.456-0.164l1.481,0.822 l3.127,2.14l3.127,3.127v4.937l3.949,4.278l0.987,2.962l1.317,1.975l1.975,1.317l1.317,1.481v1.646l4.937,1.152v5.76 c0,0-0.494,5.924,7.406,6.748c7.899,0.823,8.228-0.988,8.228-0.988l3.127-0.165l1.646,1.482l0.165,36.534l-10.368-0.328 l0.165,19.747l-28.964-0.328l0.493-29.623l-38.838-0.329l1.481-48.384h9.38v-9.38h-3.785L216.179,91.719L216.179,91.719z",
	"Dickinson" : "M208.444,201.486l1.317,1.481l-0.988,2.304l1.811,1.152l0.658,0.987l-5.102,6.089l4.279,4.278h3.126l2.14-1.646l1.974,0.165v3.127 l3.126,1.316h4.608l1.646,1.975l1.81,2.139l12.014-0.165l-0.165-19.419l5.924-0.165l0.987-38.837l-38.509-0.494L208.444,201.486 L208.444,201.486z",
	"Menominee" : "M246.295,293.315l0.329-4.772c0,0,11.355-12.343,13.495-15.634c2.139-3.291,0.823-3.786,0.823-3.786l2.139-2.303l1.481-3.456 l4.114-4.938l0.165-3.95l5.267-10.203h-5.267l0.658-38.509l-3.456-0.329v-9.38l-19.255-0.329v9.545h-5.759l-0.165,19.584h-10.862 l2.14,2.304l1.646,2.305l-0.987,1.151l-2.469,1.316l1.317,2.798l2.139,2.468v2.798l-0.823,1.481l-3.456,0.823l0.987,1.81l1.81,1.646 l-0.823,6.583l-3.126,3.456l-1.316,0.987v4.607l-1.646,2.963l1.316,1.81l3.95,0.164h4.937l2.798-3.291l1.646-0.987l1.646,0.823 l1.481,2.469l-0.329,3.62l-3.292,5.102l-1.645,6.418l-1.811,3.456l0.987,2.963l2.468,2.139l1.811,1.975l0.658,2.304L246.295,293.315 L246.295,293.315z",
	"Iron"  : "M142.453,144.546l66.979,1.81l-0.988,55.131l-2.139,0.165l-2.797-2.469l-3.292-0.494l-1.646-0.493l-0.823-0.987l-1.975,0.987 l-3.456-0.166l-2.14-2.139l-1.646-1.81l-1.646,1.48h-2.962l-2.633-2.304l-1.975-0.165l-0.988-2.468l-3.456-0.165l-1.811,0.987 h-2.468l-1.646,2.798l-3.95-1.646c0,0,0.494-1.316-0.165-1.481c-0.658-0.164-2.962-0.658-2.962-0.658l-3.456-0.988l-4.443-0.494 l-12.178-8.558L142.453,144.546L142.453,144.546z",
	"Baraga" : "M215.851,91.555 l-0.987-0.823l-4.114-0.165l-0.659,1.152l-4.114-0.329l0.165-1.152l3.456-3.456v-1.317h-1.811l-4.937,3.292l-4.443,2.962 l-5.595,5.76h-2.14l-0.823,2.633l-3.292,4.608l-2.798-0.329l-1.316-4.443l0.658-6.089l2.14-5.925h-7.9v9.545h-9.874l-1.152,47.56 l43.281,1.152l0.823-28.635l9.38-0.164l0.165-9.052l-4.278-0.493L215.851,91.555L215.851,91.555z",
	"Keweenaw" : "M218.973,28.859 l-6.912,1.152l-5.607,0.48l-3.283,2.65l-5.28,1.805l-10.195,5.26l-3.629,5.261l-3.283,3.302l15.474,0.326l0.654,10.368h4.935 c0,0,3.296-0.825,3.955-0.825s2.304-1.978,2.304-1.978l4.608-5.088l2.63-2.803h2.304l1.805-1.478l5.28-3.13l-1.151-2.304 l-0.826-1.978l3.283-1.325h4.455l0.979,0.5c0,0,2.472,0.337,3.13,0.172c0.658-0.165,1.478-0.499,1.478-0.499l1.651-0.827 l4.281-0.153v-3.456l-2.803-2.976l-3.13-1.305l-3.782-1.152L218.973,28.859L218.973,28.859z",
	"Houghton" : "M149.2,76.414 l-1.152,29.952l5.431,0.165v9.216l-10.203-0.329l-0.823,28.635l24.027,0.987l0.987-47.395h9.709l0.164-10.039h8.558l0.165-3.126 l1.811-0.165l2.633-2.798l1.975-4.114l0.987-4.773l3.292-1.316l2.469-4.443l0.329-0.823h2.797l0.33-6.583h-4.938V49.096 l-16.128-0.164l-2.139,2.962l-4.279,3.127l-6.089,1.316l-5.266,4.772l-2.962,3.127l-2.305,0.329l-2.468,2.634l-2.962,1.481 l-2.633,4.114L149.2,76.414L149.2,76.414z",
	"Gogebic"  : "M141.465,180.586l-9.051-4.937l-77.511-25.179c0,0-2.798-13.331-3.456-13.825c-0.659-0.494-4.938-5.924-4.938-5.924l-2.304,0.494 v-1.152l-2.962-0.658l-0.659-3.456l-0.823-0.658l-1.48,1.81l-3.292,0.329l-1.646-3.95l5.76-3.456l10.039-2.468l13.495-4.279 l3.291-1.646l8.887-7.899l2.468,0.329l-0.329,7.9h-0.823l-0.165,11.19l9.71-0.164l-0.329,10.203l28.634,0.987l-0.493,19.42 l28.47,0.987L141.465,180.586L141.465,180.586z",
	"Ontonagon"  : "M133.237,81.023 l2.303-0.165l0.823,1.646l3.95-2.14l2.633,0.659l6.253-4.279l-1.152,29.458l5.595,0.658v8.722H143.44l-1.481,38.838l-28.799-0.987 l0.658-19.419l-28.635-1.152v-9.709l-9.216-0.165l0.165-11.355l0.988-0.165v-7.735l-2.139-0.164l3.292-3.292l4.278-2.139 l3.949-1.317l5.102-0.658l2.798,2.14l6.912-1.316l2.139-0.659h7.734l13.659-6.747L133.237,81.023L133.237,81.023z",
	"path2093"  : "M52.425,85.649l-19.084,38.168",
	"Saginaw" : "M505.661,477.452l0.822,35.464l35.794-0.494l-0.33-10.943l18.926-0.74l-0.904-28.142h-9.957l-0.329-4.772l-18.432-0.165 l-0.083-4.607h-9.544v9.873l-15.963,0.084V477.452L505.661,477.452z",
	"Ogemaw"  : "M502.781,358.797l1.151,38.593l38.92-0.907l-1.315-38.508L502.781,358.797L502.781,358.797z",
	"Kalkaska"  : "M426.082,326.762l0.93-5.003l1.514-0.931l35.725-0.117l-0.116,38.984l-37.819,0.233L426.082,326.762L426.082,326.762z"
};

