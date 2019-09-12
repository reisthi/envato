<?php include '_partials/header.php'; ?>

<h1>Search Actors By Last Name</h1>
<form action='index.php' method='post'>
<select name='q' id='q'>
    <?php 
        $alphabet = str_split('aabcdefghijklmnopqrstyvxyz');
        foreach( $alphabet as $letter ) {
            echo "<option value='$letter'>$letter</option>";
        }
    ?>
    </select>
    <br><br>
    <button type="submit">Go!</button>
</form>

<?php if ( isset($actors) ) : ?>
<ul class='actor-list'>
    <?php foreach( $actors as $a ) {
        echo "<li data-actor_id='{$a->actor_id}'><a href='actor.php?actor_id={$a->actor_id}'>{$a->first_name} {$a->last_name}</a></li>";
    }
    ?>
</ul>
<?php endif; ?>


<?php include '_partials/footer.php'; ?>
