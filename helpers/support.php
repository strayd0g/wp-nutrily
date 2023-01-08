<?php

function insert_multiple_rows( $table, $request ) {
    global $wpdb;
    $column_keys   = '';
    $column_values = '';
    $sql           = '';
    $last_key      = array_key_last( $request );
    $first_key     = array_key_first( $request );
    foreach ( $request as $k => $value ) {
        $keys = array_keys( $value );

        // Prepare column keys & values.
        foreach ( $keys as $v ) {
            $column_keys   .= sanitize_key( $v ) . ',';
            $sanitize_value = sanitize_text_field( $value[ $v ] );
            $column_values .= is_numeric( $sanitize_value ) ? $sanitize_value . ',' : "'$sanitize_value'" . ',';
        }
        // Trim trailing comma.
        $column_keys   = rtrim( $column_keys, ',' );
        $column_values = rtrim( $column_values, ',' );
        if ( $first_key === $k ) {
            $sql .= "INSERT INTO {$table} ($column_keys) VALUES ($column_values),";
        } elseif ( $last_key == $k ) {
            $sql .= "($column_values)";
        } else {
            $sql .= "($column_values),";
        }

        // Reset keys & values to avoid duplication.
        $column_keys   = '';
        $column_values = '';
    }
    return $wpdb->query( $sql );
}

?>