<template>
    <div class="flex">
        <div v-for="star in maxStars" :key="star" class="relative star me-1">
            <font-awesome-icon :icon="['fas', ratingIcon  ]" v-if="star <= rating && star - rating != 0.5" :class="iconColor" :size="size" />
            <font-awesome-icon :icon="['fas', ratingIcon+'-half-alt'  ]" v-else-if="star - rating == 0.5 || Math.round(rating % (star - 1)) == 1 &&  Math.floor(rating) == star - 1" :class="iconColor" :size="size" />
            <font-awesome-icon :icon="[ 'far', ratingIcon ]" v-else :class="iconColor" :size="size" />
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as farSrar } from '@fortawesome/free-solid-svg-icons';
library.add(fasStar, farSrar)

export default {
    name: 'RatingSelected',
    components : {

    },
    props: {
        'rating': {
            type : Number,
            default : 0
        },
        'maxStars': {
            type : Number,
            default : 0
        },
        'iconColor': {
            type: String,
            default: 'text-fePrimary-500 dark_text-feAccent-500'
        },
        'ratingIcon': {
            type: String,
            default: 'star'
        },
        'size': {
            type: String,
            default: 'sm',
        }
    },
}
</script>
